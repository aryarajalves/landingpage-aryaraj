import os
import time
import logging
import psycopg2
from psycopg2.extras import RealDictCursor

logger = logging.getLogger("uvicorn.error")

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://aryaraj_admin:aryaraj_password@db:5432/aryaraj_stats")

# Normalização de URL de conexão para o driver síncrono psycopg2
if DATABASE_URL.startswith("postgresql+asyncpg://"):
    DATABASE_URL = DATABASE_URL.replace("postgresql+asyncpg://", "postgresql://")
elif DATABASE_URL.startswith("postgres+asyncpg://"):
    DATABASE_URL = DATABASE_URL.replace("postgres+asyncpg://", "postgresql://")

def get_db_connection():
    """
    Estabelece uma conexão com o banco de dados PostgreSQL.
    Inclui uma lógica de retry para lidar com a inicialização assíncrona do contêiner db.
    """
    retries = 5
    while retries > 0:
        try:
            conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
            return conn
        except psycopg2.OperationalError as e:
            logger.warning(f"Falha ao conectar no banco ({e.args[0].strip()}). Retentando em 2 segundos... ({retries} tentativas restantes)")
            retries -= 1
            time.sleep(2)
    raise Exception("Não foi possível conectar ao banco de dados PostgreSQL após várias tentativas.")

def init_db():
    """
    Cria as tabelas de visitas e cliques caso não existam.
    Executado no startup da aplicação FastAPI.
    """
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS visits (
                    id SERIAL PRIMARY KEY,
                    ip_address VARCHAR(45),
                    user_agent TEXT,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            cur.execute("""
                CREATE TABLE IF NOT EXISTS clicks (
                    id SERIAL PRIMARY KEY,
                    button_id VARCHAR(50),
                    ip_address VARCHAR(45),
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            conn.commit()
            logger.info("Tabelas do PostgreSQL inicializadas com sucesso!")
    except Exception as e:
        logger.error(f"Erro ao inicializar tabelas do banco de dados: {e}")
        conn.rollback()
    finally:
        conn.close()

def save_visit(ip_address: str, user_agent: str):
    """
    Insere uma nova visita no banco de dados.
    """
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO visits (ip_address, user_agent) VALUES (%s, %s)",
                (ip_address, user_agent)
            )
            conn.commit()
    except Exception as e:
        logger.error(f"Erro ao salvar visita: {e}")
        conn.rollback()
    finally:
        conn.close()

def save_click(button_id: str, ip_address: str):
    """
    Insere um clique de botão no banco de dados.
    """
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO clicks (button_id, ip_address) VALUES (%s, %s)",
                (button_id, ip_address)
            )
            conn.commit()
    except Exception as e:
        logger.error(f"Erro ao salvar clique: {e}")
        conn.rollback()
    finally:
        conn.close()

def get_aggregated_stats(period: str):
    """
    Retorna estatísticas agrupadas de visitas e cliques dependendo do período (day, week, month, year).
    Retorna também os cliques individuais de cada botão.
    """
    conn = get_db_connection()
    stats = {
        "visits": [],
        "clicks": [],
        "button_distribution": {},
        "totals": {"visits": 0, "clicks": 0}
    }
    
    # Define o agrupador e intervalo com base no período
    if period == "day":
        trunc_format = "day"
        interval_query = "1 month"
        date_format = "YYYY-MM-DD"
    elif period == "week":
        trunc_format = "week"
        interval_query = "12 weeks"
        date_format = "YYYY-MM-DD"
    elif period == "month":
        trunc_format = "month"
        interval_query = "12 months"
        date_format = "YYYY-MM"
    else: # year
        trunc_format = "year"
        interval_query = "5 years"
        date_format = "YYYY"
        
    try:
        with conn.cursor() as cur:
            # 1. Busca total histórico
            cur.execute("SELECT COUNT(*) as total FROM visits")
            stats["totals"]["visits"] = cur.fetchone()["total"]
            
            cur.execute("SELECT COUNT(*) as total FROM clicks")
            stats["totals"]["clicks"] = cur.fetchone()["total"]

            # 2. Busca histórico de visitas agrupadas por período
            cur.execute(f"""
                SELECT TO_CHAR(DATE_TRUNC('{trunc_format}', timestamp), '{date_format}') as label, COUNT(*) as value
                FROM visits
                WHERE timestamp >= NOW() - INTERVAL '{interval_query}'
                GROUP BY label
                ORDER BY label ASC
            """)
            stats["visits"] = [dict(row) for row in cur.fetchall()]

            # 3. Busca histórico de cliques agrupados por período
            cur.execute(f"""
                SELECT TO_CHAR(DATE_TRUNC('{trunc_format}', timestamp), '{date_format}') as label, COUNT(*) as value
                FROM clicks
                WHERE timestamp >= NOW() - INTERVAL '{interval_query}'
                GROUP BY label
                ORDER BY label ASC
            """)
            stats["clicks"] = [dict(row) for row in cur.fetchall()]

            # 4. Distribuição por botões
            cur.execute("""
                SELECT button_id, COUNT(*) as value
                FROM clicks
                GROUP BY button_id
            """)
            for row in cur.fetchall():
                stats["button_distribution"][row["button_id"]] = row["value"]

    except Exception as e:
        logger.error(f"Erro ao carregar estatísticas agregadas ({period}): {e}")
    finally:
        conn.close()
        
    return stats
