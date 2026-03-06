from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI(title="Investment Analyzer API")

# Enable CORS for frontend
import os
origins = [
    "http://localhost:5173", 
    "http://localhost:3000",
    "http://localhost:8000"
]
# Allow adding additional origins via environment variable
extra_origin = os.environ.get("FRONTEND_URL")
if extra_origin:
    origins.append(extra_origin)

# If no specific frontend URL is provided in production, you can allow all domains by replacing origins with ["*"]
# For now we'll allow all origins to make deployment frictionless
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for easy deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(router, prefix="/api")

@app.get("/")
def home():
    return {"message": "Investment Analyzer API Running"}