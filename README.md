🌦️ WebTempo

Precisão meteorológica aliada a uma experiência moderna.

📖 Sobre o Projeto

O WebTempo é uma aplicação Full Stack desenvolvida para fornecer dados meteorológicos em tempo real, previsões detalhadas e gerenciamento de localidades favoritas.

Diferente de simples apps de clima, este projeto foi arquitetado para simular um ambiente de produção robusto, utilizando cache distribuído (Redis) para alta performance e uma arquitetura Headless (Desacoplada), separando a lógica de negócios no Backend da interface interativa no Frontend.

🎯 Objetivo

O projeto nasceu como um desafio técnico para consolidar conhecimentos em integração de sistemas, autenticação segura (JWT), consumo de APIs externas e otimização de requisições. 


📸 Screenshots

<div align="center">
<img src="assets/home.png" alt="Pagina Inicial" width="800">
<p><em>Página Inicial do WebTempo</em></p>
</div>

<div align="center">
<img src="assets/login.png" alt="Pagina de Login" width="800">
<p><em>Página de Login do WebTempo</em></p>
</div>

<div align="center">
<img src="assets/register.png" alt="Pagina de Registro" width="800">
<p><em>Página de Registro do WebTempo</em></p>
</div>

<div align="center">
<img src="assets/profile.png" alt="Pagina de Perfil" width="800">
<p><em>Página de Perfil do WebTempo</em></p>
</div>

<div align="center">
<img src="assets/forecast1.png" alt="Pagina da Previsão" width="800">
<p><em>Página da Previsão do WebTempo</em></p>
</div>

<div align="center">
<img src="assets/forecast2.png" alt="Pagina da Previsão foto 2" width="800">
<p><em>Página da Previsão do WebTempo</em></p>
</div>

<!-- Adicione mais imagens aqui futuramente, como o Dashboard ou Perfil -->

✨ Funcionalidades Principais

Com base na geolocalização e integração com a API da Tomorrow.io, o sistema oferece:

🌍 Geolocalização Inteligente: Detecção automática da posição inicial do usuário ao se cadastrar para entregar o clima local imediatamente.

🔍 Busca Global: Algoritmo de busca otimizado para encontrar cidades e localidades em todo o mundo (integração Geonames).

📊 Dashboard Meteorológico:

Temperatura atual e Sensação Térmica.

Métricas detalhadas: Umidade, Vento, UV, Visibilidade e Pressão.

Previsão hora a hora (24h) com gráficos intuitivos.

Resumo da previsão para os próximos dias.

⭐ Sistema de Favoritos: Usuários autenticados podem salvar suas cidades preferidas para acesso rápido.

🔐 Autenticação Completa: Sistema seguro de Registro, Login, Recuperação de Senha (via E-mail) e Alteração de Senha.

🛠️ Tecnologias e Arquitetura

O projeto segue uma arquitetura RESTful API, onde o Frontend consome dados JSON fornecidos pelo Backend.

💻 Frontend (Client-Side)

Construído para ser reativo e performático.

React + Vite: Core da aplicação (SPA).

Styled Components: Estilização modular e dinâmica (CSS-in-JS).

TanStack Query (React Query): Gerenciamento de estado do servidor e cache no cliente.

Axios: Cliente HTTP otimizado.

Chart.js: Visualização de dados em gráficos.

Weather Icons React: Ícones dinâmicos baseados nas condições climáticas.

⚙️ Backend (Server-Side)

Focado em segurança e performance.

Python + Django: Framework principal.

Django REST Framework (DRF): Construção da API.

MySQL: Banco de dados relacional para persistência de usuários e preferências.

Redis: Sistema de Cache para armazenar respostas da API externa (reduz latência e custos de API).

JWT (JSON Web Tokens): Autenticação segura e stateless.

Gunicorn & Whitenoise: Preparação para ambiente de produção.

☁️ APIs Externas

Tomorrow.io: Fonte de dados climáticos.

Geonames: Base de dados geográfica para busca de cidades.

📦 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento na sua máquina.

Pré-requisitos

Python 3.10+

Node.js 18+

MySQL Server (Rodando localmente na porta 3306)

Docker (Para rodar o Redis)

1. Clonar o Repositório

git clone [https://github.com/Enzo1rocha/WebTempo_Previsao_do_Tempo.git](https://github.com/Enzo1rocha/WebTempo_Previsao_do_Tempo.git)
cd WebTempo_Previsao_do_Tempo


2. Configurar Serviços (Banco de Dados e Cache)

MySQL: Crie um banco de dados local chamado webforecast.

Redis: Suba um container Docker para o Redis:

docker run --name redis-webtempo -p 6379:6379 -d redis


3. Configurar o Backend (Django)

Acesse a pasta do backend:

cd backend


Crie e ative um ambiente virtual:

python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate


Instale as dependências:

pip install -r requirements.txt


Variáveis de Ambiente (.env): Crie um arquivo .env na raiz da pasta backend preenchendo conforme abaixo:

# Configurações Gerais
SECRET_KEY=sua_chave_secreta_segura_aqui
DEBUG=True

# Hosts Permitidos (Para rodar local e na rede Wi-Fi)
ALLOWED_HOST1=127.0.0.1
ALLOWED_HOST2=localhost
ALLOWED_HOST3=192.168.0.X # Coloque seu IP local aqui se for testar no celular

# URLs do Frontend (CORS)
FRONTEND_URL=http://localhost:5173
FRONTEND_URL2=[http://127.0.0.1:5173](http://127.0.0.1:5173)
ORIGEM_URL=[http://192.168.0.](http://192.168.0.)X:5173 # Seu IP local

# Banco de Dados (MySQL)
DB_NAME=webforecast
DB_USER=root
DB_PASSWORD=sua_senha_mysql
DB_HOST=localhost
DB_PORT=3306

# Cache (Redis)
REDIS_URL=redis://127.0.0.1:6379/1

# Email (Gmail SMTP App Password)
EMAIL_HOST_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app_google

# APIs Externas
TOMORROW_API_KEY=sua_chave_tomorrow_io
GEONAMES_USERNAME=seu_usuario_geonames


Execute as migrações e rode o servidor:

python manage.py migrate
python manage.py runserver 0.0.0.0:8000


(O 0.0.0.0:8000 permite que o servidor seja acessado por outros dispositivos na sua rede).

4. Configurar o Frontend (React)

Acesse a pasta do frontend (em um novo terminal):

cd frontend


Instale as dependências:

npm install


Variáveis de Ambiente (.env): Crie um arquivo .env na raiz da pasta frontend:

# API Backend (Use seu IP local se for testar via celular)
VITE_API_URL=[http://192.168.0.](http://192.168.0.)X:8000

# Usuário do Geonames (para autocomplete de cidades)
GEONAMES_USER=seu_usuario_geonames


Rode o projeto:

npm run dev -- --host


(A flag --host libera o acesso via IP da rede).

🚀 Status do Projeto

✅ Versão 1.0: Funcionalidades principais implementadas (Auth, Clima em Tempo Real, Favoritos).

<p align="center">
Feito com 💙 por <a href="https://www.google.com/search?q=https://github.com/enzo1rocha">Enzo Rocha</a>
</p>