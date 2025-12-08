# app/main.py
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from dotenv import load_dotenv

load_dotenv()  # loads .env in development


API_KEY = os.getenv("OPENWEATHER_API_KEY")
if not API_KEY:
    # It's fine for local dev to run without key but endpoint will return helpful error.
    print("Warning: OPENWEATHER_API_KEY not set. Set it in .env or environment variables.")

app = FastAPI(title="Weather Proxy API")

# Allow CORS for any origin during dev. Restrict this in production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],           # change to your client origin(s) in production
    allow_credentials=True,
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/weather")
def get_weather(city: str):
    """
    Query params:
      /weather?city=Abuja
    Returns the external API payload (proxied).
    """
    if not API_KEY:
        raise HTTPException(status_code=500, detail="Server missing OPENWEATHER_API_KEY")

    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {"q": city, "appid": API_KEY, "units": "metric"}

    try:
        r = requests.get(url, params=params, timeout=10)
    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"Upstream error: {e}")

    if r.status_code != 200:
        # pass through error details from upstream (but sanitize if needed)
        try:
            payload = r.json()
        except Exception:
            payload = {"error": "unknown upstream error"}
        raise HTTPException(status_code=r.status_code, detail=payload)

    return r.json()
