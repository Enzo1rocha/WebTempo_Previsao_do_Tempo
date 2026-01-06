# Copilot / Agent Instructions — WebTempo

Propósito: orientar agentes autônomos a serem produtivos neste repositório (frontend React + backend Django/DRF).

## Visão geral rápida
- Arquitetura: Frontend (React + Vite) consome uma API RESTful Django/DRF no `backend/`. Cache via Redis para reduzir chamadas à API externa (Tomorrow.io). Banco de produção: MySQL.
- Principais pastas: `backend/` (Django), `frontend/app/` (React + Vite).

## Comandos e fluxo de desenvolvimento (rápido)
- Backend:
  - Criar/ativar venv: `python -m venv venv` → `venv\Scripts\activate` (Windows)
  - Instalar dependências: `pip install -r requirements.txt`
  - Copiar `.env` conforme `README.md`, configurar `TOMORROW_API_KEY`, `REDIS_URL`, `DB_*`, etc.
  - Migrar: `python manage.py migrate`
  - Rodar: `python manage.py runserver 0.0.0.0:8000`
- Frontend:
  - Entrar em `frontend/app` → `npm install`
  - Rodar: `npm run dev` (na prática o projeto usa `--host` para acesso em rede: `npm run dev -- --host`).
- VSCode Tasks exist: "Run Frontend Server" e "Run Backend Server".

## Autenticação e tokens (essencial)
- Sistema: `dj-rest-auth` + `djangorestframework-simplejwt` com tokens via cookies.
- Backend: `accounts.authentication.CookieJWTAuthentication` lê `access_token` do cookie; `CustomTokenRefreshView` (`accounts.views`) configura cookie `access_token` (tempo 15 min via settings SIMPLE_JWT). Veja `backend/app/settings.py` e `backend/accounts/authentication.py`.
- Frontend: `frontend/app/src/services/api.js` e `authService.js` usam `axios` com `withCredentials: true`. Interceptor automático renova token via `/api/auth/token/refresh/` e lança evento `auth-expired` se falhar.

## Endpoints e convenções importantes
- Rotas principais definidas em `backend/app/urls.py`:
  - `search-city/` (GET) — parâmetros obrigatórios: `name, country, state, lon, lat` (veja validações). Resposta em `{ message: ... }`.
  - `favorite_locations/`, `boot_location/` — CRUD do usuário (autenticado).
  - `api/auth/*` — login, logout, refresh, user, password reset, registro.
  - `api/contact/` — contato público.
- Padrão de respostas: muitos endpoints retornam `Response({'message': ...})` ou `Response(errors, status=...)` (observe a estrutura esperada pelo frontend).

## Cache e integração externa
- `backend/wheater/views.py` integra com Tomorrow.io (endpoints realtime/timelines/forecast) e com `timezonefinderL` para timezone.
- Cache: chave `weather_data_zone_{name}_{country}_{state}_{lon}_{lat}`, TTL de `1800s` (30 minutos). Redis configurado via `REDIS_URL` em `CACHES` no `settings.py`.

## Limitações & Rate limits
- Rate limits aplicados via `django_ratelimit` nos views (decorators `ratelimit`), com mensagens de erro em português e códigos 429 quando aplicável; alguns endpoints usam `block=True` (bloqueio) e outros apenas retornam 429 sem bloquear.
- Testes e chamadas com frequência podem esbarrar nos limites — prefira usar cache e evitar loops de refresh.

## Convenções e padrões do código
- Model `CustomUser` estende `AbstractUser`; o projeto usa `email` como `unique` e a configuração `AUTH_USER_MODEL` aponta para `accounts.CustomUser`.
- Em `accounts.models`, campos relacionados ao usuário têm nome `username` mesmo sendo FK — preste atenção ao usar `username` nos filtros/serializers.
- Serializers costumam receber `context={'request': req}` nos pontos onde contexto é necessário.
- Mensagens de erro e logs em grande parte estão em Português; mantenha consistência ao adicionar mensagens de usuário.

## Arquivos-chave para olhar primeiro (orientações para agent)
- Autenticação e comportamento de cookies/tokens: `backend/accounts/authentication.py`, `backend/accounts/views.py`, `backend/app/settings.py`.
- Integração clima/Cache: `backend/wheater/views.py`.
- Fluxo de login/refresh frontend: `frontend/app/src/services/api.js`, `frontend/app/src/services/authService.js`, `frontend/app/src/context/AuthContext.jsx`.
- Estrutura de rotas/API: `backend/app/urls.py`.
- Documentação de setup/variáveis: `README.md`.

## Testes & depuração
- Backend: `python manage.py test` (padrão Django). Logs de negócios usam `print()` em vários pontos — útil para debugging rápido.
- Frontend: `npm run lint` para lint; use console do browser e network tab para investigar chamadas a `/api/*` (cookies e CORS são pontos comuns de falha).

## Scripts / PRs / trabalho automático
- Ao criar mudanças que tocam autenticação/cookies, inclua testes de integração simulando refresh e `auth-expired` (ou documente manualmente como reproduzir).
- Ao adicionar endpoints que chamam Tomorrow.io, reutilize o padrão de cache (mesma chave/TTL) e mantenha logs claros de `CACHE HIT` / `CACHE MISS`.

## Exemplo rápido de request (autenticado)
- GET de clima (exemplo):
  - GET `http://localhost:8000/search-city/?name=São%20Paulo&country=BR&state=SP&lat=-23.55&lon=-46.63`
  - Requer token via cookie `access_token` (o frontend já gerencia isso automaticamente).

---
Se algo estiver incompleto ou quiser que eu detalhe exemplos de testes unitários/integrados, diga qual área prefere que eu amplie (auth, cache, chamadas externas, ou frontend). Obrigado!