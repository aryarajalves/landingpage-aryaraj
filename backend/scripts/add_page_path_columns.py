import os
import psycopg2
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("migration")

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://aryaraj_admin:aryaraj_password@db:5432/aryaraj_stats")

if DATABASE_URL.startswith("postgresql+asyncpg://"):
    DATABASE_URL = DATABASE_URL.replace("postgresql+asyncpg://", "postgresql://")
elif DATABASE_URL.startswith("postgres+asyncpg://"):
    DATABASE_URL = DATABASE_URL.replace("postgres+asyncpg://", "postgresql://")

def migrate():
    logger.info("Iniciando migração para adicionar a coluna page_path em visits e clicks...")
    conn = psycopg2.connect(DATABASE_URL)
    try:
        with conn.cursor() as cur:
            cur.execute("""
                ALTER TABLE visits 
                ADD COLUMN IF NOT EXISTS page_path VARCHAR(100) DEFAULT '/';
            """)
            cur.execute("""
                ALTER TABLE clicks 
                ADD COLUMN IF NOT EXISTS page_path VARCHAR(100) DEFAULT '/';
            """)
            conn.commit()
            logger.info("Migração de colunas concluída com sucesso!")
    except Exception as e:
        logger.error(f"Erro durante a migração: {e}")
        conn.rollback()
        raise e
    finally:
        conn.close()

if __name__ == "__main__":
    migrate()
