# app/core/config.py
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from a .env file if present

API_NAME = os.getenv("API_NAME", "solo-dnd-ai-backend")
ENV = os.getenv("ENV", "dev")
