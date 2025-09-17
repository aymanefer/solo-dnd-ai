# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Solo D&D AI - Backend", version="0.1.0")

# CORS: allow Next.js dev server (adjust as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Solo D&D AI backend is alive."}


@app.get("/health")
def health():
    return {"status": "ok", "service": "backend", "version": app.version}
