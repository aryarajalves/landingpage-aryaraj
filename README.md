# Aryaraj Serviços — Plataforma & Landing Pages Oficiais

Plataforma de alta conversão e infraestrutura tecnológica para infoprodutos e negócios digitais desenvolvida por Aryaraj.

## 🚀 Soluções Integradas

1. **API Oficial do WhatsApp (`/apioficial`):**
   - Infraestrutura em nuvem Meta Cloud API oficial.
   - Atendimento multi-atendentes, estabilidade e risco mínimo de banimento.
   - Disparos de recuperação via webhooks (carrinho abandonado, PIX gerado, boleto, cartão recusado).

2. **Implementação de Agentes de IA no WhatsApp (`/agente-whatsapp`):**
   - Agentes inteligentes e autônomos treinados para suporte, atendimento e vendas 24/7.
   - Transcrição e resposta a mensagens de áudio.
   - Painel de aprendizado contínuo para refinar as respostas do agente.

3. **Criação de Aplicativos para Infoproduto (`/aplicativos`):**
   - Diagnóstico estratégico da audiência para criar ferramentas que resolvem dores reais.
   - Preparado para a era da Inteligência Artificial (superando cursos obsoletos com resolução prática e imediata).
   - Aumento de LTV e criação de receita recorrente (SaaS).

4. **Co-Produção Tecnológica (`/coproducao`):**
   - Braço técnico especializado assumindo 100% da engenharia de software e infraestrutura.
   - Ferramentas proprietárias já inclusas: **ZapJords** (disparos oficiais), **AgentFlow** (agentes de IA), **ZapGroup** (gestão de grupos), soluções tipo Vtubr/Hotwebinar.
   - Economia de R$ 2.000 a R$ 5.000 por mês em ferramentas avulsas.

5. **Hub Linktree Central (`/`):**
   - Roteamento intuitivo para todos os serviços e produtos digitais.

6. **Painel Administrativo (`/admin`):**
   - Dashboard de telemetria com contagem de visitas e taxa de conversão por botão.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Vite, Lucide React, Vitest.
- **Backend:** Python, FastAPI, SQLAlchemy, PostgreSQL, Pytest.
- **Infraestrutura:** Docker & Docker Compose.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- Docker & Docker Compose instalados.

### Executando com Docker
```bash
# Subir todos os containers
docker-compose -f Docker/docker-compose-local.yml up -d --build

# Acessar a aplicação
# Frontend: http://localhost:5173
# Backend API: http://localhost:8001
```

### Rodando os Testes Unitários

```bash
# Testes do Frontend (Vitest)
docker exec landing_page_frotend npm test -- --run

# Testes do Backend (Pytest)
docker exec landing_page_backend pytest
```

---

Aryaraj Serviços © 2026 • Tecnologia para Infoprodutos e Negócios Digitais
