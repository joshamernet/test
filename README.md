# test
This is a repository for testing purposes.

# Kanban Board Web App

This project is a simple Kanban board web application, consisting of:

- **Backend:** Python FastAPI
- **Database:** MongoDB
- **Frontend:** ReactJS

## Project Structure
- `backend/` : FastAPI backend server
- `frontend/` : ReactJS web app

## Prerequisites
- Python 3.10+
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)

## How to Run

### 1. Start MongoDB
Make sure you have a running MongoDB instance. You can use a local MongoDB or a cloud service like MongoDB Atlas.

### 2. Start Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
The backend will be available at `http://localhost:8000`.

### 3. Start Frontend (ReactJS)
```bash
cd frontend
npm install
npm start
```
The frontend will be available at `http://localhost:3000`.

---

You can now access the Kanban board web app via your browser at `http://localhost:3000`.
