# Registro de Alterações no Esquema do Banco de Dados (DATABASE_SCHEMA_LOG.md)

Este documento registra todas as alterações e migrações estruturais aplicadas ao banco de dados PostgreSQL do projeto.

---

### [2026-09-18] Adição da Coluna `page_path` em `visits` e `clicks`
- **Tabelas Afetadas:** `visits`, `clicks`
- **Novas Colunas:**
  - `visits.page_path`: `VARCHAR(100) DEFAULT '/'` - Rastreia a página/slug exato visitado pelo usuário (ex: `/`, `/apioficial`, `/agente-whatsapp`, etc.).
  - `clicks.page_path`: `VARCHAR(100) DEFAULT '/'` - Rastreia a página/slug onde o clique foi originado.
- **Script de Migração:** `backend/scripts/add_page_path_columns.py`
- **Motivação:** Exigência de métricas por página no Painel Administrativo (`/admin`).
