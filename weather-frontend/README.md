# Frontend README.md
# Veritas Weather Frontend 🌤️

badges:
  - "https://img.shields.io/badge/html-5-orange"
  - "https://img.shields.io/badge/css-3-blue"
  - "https://img.shields.io/badge/JS-ES6-yellow"

description: >
  This is the **frontend** of the Veritas Weather Assignment.
  It consumes the FastAPI backend to display weather data dynamically.

features:
  - Default city: Abuja
  - Search for any city
  - Suggestion buttons: Paris, Lagos, Lisbon, New York
  - Weather details: temperature, humidity, wind, clouds, rain
  - Responsive design for mobile and desktop

setup:
  steps:
    - "Open `frontend` folder in preferred editor"
    - "Update backend URL in `index.js` if necessary: const API_BASE = 'https://client-server-application-veritas.onrender.com/weather';"
    - "Open `index.html` in a browser"

deployment:
  options:
    - GitHub Pages: Move frontend files to `/docs` or root, then Settings → Pages → select `/docs` or root
    - Netlify or Vercel: Drag & drop frontend folder, connect backend API URL

author: "King Immanuel"
