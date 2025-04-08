# 📦 Sistema Full Stack - FastAPI + React + MySQL

Este projeto é uma aplicação full stack que utiliza:

- 📡 **FastAPI** como backend
- 🛢️ **MySQL** como banco de dados
- 🧭 **React** (com Vite) no frontend

---

## 🚀 Funcionalidades

- 🔄 Operações CRUD completas
- 🌐 API com documentação automática (Swagger)
- 🔗 Comunicação entre frontend e backend via Axios
- 💾 Persistência dos dados com MySQL
- 🎨 Interface intuitiva com React + Styled Components

---

## 🧰 Tecnologias Utilizadas

### Backend
- FastAPI
- Uvicorn
- SQLAlchemy
- PyMySQL

### Banco de Dados
- MySQL (gerenciado com MySQL Workbench)

### Frontend
- React (com Vite)
- Axios
- React Router
- Styled Components

---

## ⚙️ Como Rodar o Projeto

### 🔧 Requisitos
- Python 3.10+
- Node.js
- MySQL
- Git (opcional)

---

### 1️⃣ Rodar o Backend (FastAPI)

```bash
# Entrar na pasta do backend
cd backend

# Criar e ativar o ambiente virtual
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/macOS
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Rodar o servidor FastAPI
uvicorn main:app --reload
