import time
from fastapi.testclient import TestClient
from main import app, ADMIN_USERNAME, ADMIN_PASSWORD

client = TestClient(app)

def test_read_root():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"message": "Aryaraj API Backend rodando com sucesso!"}

def test_get_politica_privacidade():
    response = client.get("/politica-privacidade")
    assert response.status_code == 200
    assert "text/html" in response.headers["content-type"]
    assert "Política de Privacidade" in response.text
    assert "Api Oficial Aryaraj" in response.text
    assert "compromisso do usuário" in response.text.lower()

def test_get_termos_uso():
    response = client.get("/termos-uso")
    assert response.status_code == 200
    assert "text/html" in response.headers["content-type"]
    assert "Termos de Serviço" in response.text
    assert "Api Oficial Aryaraj" in response.text
    assert "isenção de responsabilidade" in response.text.lower()

def test_track_visit():
    response = client.post("/api/track/visit", json={"page_path": "/apioficial"}, headers={"User-Agent": "Pytest Agent"})
    assert response.status_code == 200
    assert response.json()["status"] == "success"

def test_track_click():
    response = client.post("/api/track/click", json={"button_id": "test_button", "page_path": "/apioficial"})
    assert response.status_code == 200
    assert response.json()["status"] == "success"

def test_admin_login_success():
    response = client.post("/api/admin/login", json={"username": ADMIN_USERNAME, "password": ADMIN_PASSWORD})
    assert response.status_code == 200
    assert "access_token" in response.json()
    assert response.json()["token_type"] == "bearer"

def test_admin_login_invalid_credentials():
    response = client.post("/api/admin/login", json={"username": ADMIN_USERNAME, "password": ADMIN_PASSWORD + "_wrong"})
    assert response.status_code == 401
    assert "incorretos" in response.json()["detail"]

def test_admin_stats_unauthorized():
    response = client.get("/api/admin/stats")
    assert response.status_code == 401
    assert "ausente" in response.json()["detail"]

def test_admin_stats_authorized_success():
    # 1. Login para obter token
    login_response = client.post("/api/admin/login", json={"username": ADMIN_USERNAME, "password": ADMIN_PASSWORD})
    token = login_response.json()["access_token"]
    
    # 2. Requisita estatísticas usando o token JWT
    headers = {"Authorization": f"Bearer {token}"}
    response = client.get("/api/admin/stats?period=day", headers=headers)
    assert response.status_code == 200
    assert "visits" in response.json()
    assert "clicks" in response.json()
    assert "totals" in response.json()
    assert "button_distribution" in response.json()
    assert "page_distribution" in response.json()
