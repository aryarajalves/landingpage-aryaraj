import os
import uvicorn
import logging
import datetime
import jwt
from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from pydantic import BaseModel
from starlette.exceptions import HTTPException as StarletteHTTPException

from legal_docs import get_privacy_policy_html, get_termos_uso_html
from database import init_db, save_visit, save_click, get_aggregated_stats

# Configuração do logger uvicorn
logger = logging.getLogger("uvicorn.error")

# Inicializa o rate limiter
limiter = Limiter(key_func=get_remote_address)
app = FastAPI(title="Aryaraj API Legal Docs Backend")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Habilita o CORS para permitir requisições de origens diferentes (como o frontend na porta 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inicializa as tabelas do banco no startup do app
@app.on_event("startup")
def startup_db_client():
    init_db()

# Configurações do painel administrativo
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "admin123")
SECRET_TOKEN = os.getenv("SECRET_TOKEN", "aryaraj_secret_token_2026")

# Schemas de dados
class LoginRequest(BaseModel):
    username: str
    password: str

class ClickRequest(BaseModel):
    button_id: str

# Helpers de Autenticação JWT
def create_jwt_token(username: str) -> str:
    expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    payload = {
        "sub": username,
        "exp": expiration
    }
    return jwt.encode(payload, SECRET_TOKEN, algorithm="HS256")

def get_current_admin(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token de autorização ausente ou malformatado.")
    
    token = auth_header.split(" ")[1]
    try:
        payload = jwt.decode(token, SECRET_TOKEN, algorithms=["HS256"])
        if payload.get("sub") != ADMIN_USERNAME:
            raise HTTPException(status_code=401, detail="Credenciais de token inválidas.")
        return payload.get("sub")
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado. Por favor, faça login novamente.")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token inválido.")

# Handler global de exceções
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Erro inesperado em {request.method} {request.url.path}: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Erro interno do servidor. Tente novamente mais tarde."}
    )

@app.exception_handler(StarletteHTTPException)
async def custom_http_exception_handler(request: Request, exc: StarletteHTTPException):
    if exc.status_code == 404 and not request.url.path.startswith("/api"):
        if os.path.exists("dist/index.html"):
            return FileResponse("dist/index.html")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail}
    )

# Endpoint para verificar a saúde do servidor backend
@app.get("/api/health")
@limiter.limit("50/minute")
def read_root(request: Request):
    """
    Retorna uma mensagem simples de confirmação indicando que o servidor está rodando.
    """
    return {"message": "Aryaraj API Backend rodando com sucesso!"}

# Endpoint que retorna a página HTML completa da Política de Privacidade
@app.get("/politica-privacidade", response_class=HTMLResponse)
@limiter.limit("50/minute")
def get_politica_privacidade(request: Request):
    """
    Retorna a resposta em HTML contendo a política de privacidade
    com base no layout centralizado e estilizado premium.
    """
    return get_privacy_policy_html()

# Endpoint que retorna a página HTML completa dos Termos de Uso
@app.get("/termos-uso", response_class=HTMLResponse)
@limiter.limit("50/minute")
def get_termos_uso(request: Request):
    """
    Retorna a resposta em HTML contendo os termos de uso do site
    com base no layout centralizado e estilizado premium.
    """
    return get_termos_uso_html()

# --- Rotas de Rastreamento ---

@app.post("/api/track/visit")
@limiter.limit("50/minute")
def track_visit(request: Request):
    """
    Registra uma nova visualização de página com o IP e User-Agent do cliente.
    """
    client_ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "unknown")
    user_agent = request.headers.get("user-agent", "unknown")
    save_visit(client_ip, user_agent)
    return {"status": "success", "message": "Visita registrada com sucesso."}

@app.post("/api/track/click")
@limiter.limit("50/minute")
def track_click(request: Request, click_data: ClickRequest):
    """
    Registra um clique em botão identificando qual botão foi acionado.
    """
    client_ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "unknown")
    save_click(click_data.button_id, client_ip)
    return {"status": "success", "message": f"Clique no botão '{click_data.button_id}' registrado."}

# --- Rotas Administrativas ---

@app.post("/api/admin/login")
@limiter.limit("10/minute")
def admin_login(request: Request, login_data: LoginRequest):
    """
    Autentica o administrador e retorna o token JWT de acesso.
    """
    if login_data.username == ADMIN_USERNAME and login_data.password == ADMIN_PASSWORD:
        token = create_jwt_token(ADMIN_USERNAME)
        return {"access_token": token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Usuário ou senha incorretos.")

@app.get("/api/admin/stats")
@limiter.limit("50/minute")
def admin_stats(request: Request, period: str = "day", admin_user: str = Depends(get_current_admin)):
    """
    Retorna as estatísticas agrupadas do site por período (day, week, month, year).
    Exige cabeçalho de autorização JWT Bearer.
    """
    if period not in ["day", "week", "month", "year"]:
        raise HTTPException(status_code=400, detail="Período inválido. Escolha entre: day, week, month ou year.")
    stats = get_aggregated_stats(period)
    return stats

# Servir arquivos estáticos do frontend (se a pasta dist existir)
from fastapi.staticfiles import StaticFiles
if os.path.exists("dist"):
    app.mount("/", StaticFiles(directory="dist", html=True), name="static")

# Inicializador do uvicorn (executado quando o script roda diretamente)
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
