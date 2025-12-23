# Client-Server-Application-Veritas


# 🌦️ Weather Client–Server Application

## 📖 Project Description

This project is a **client–server weather application** built using **FastAPI** for the backend and **React** for the frontend.

The client sends HTTP requests to the server to request weather data.  
The server then fetches real-time weather information from an external weather API and returns the data to the client in JSON format.

---

## 🏗️ Project Structure

```

.
├── weather-api/         # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── weather-frontend/    # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md

````

---

## 🛠️ Technologies Used

### Backend (Server)
- FastAPI
- Python
- Uvicorn
- HTTP Requests (to external weather API)

### Frontend (Client)
- React
- JavaScript
- HTML & CSS
- Fetch API / Axios

---

## 🔄 How the Application Works

1. The user enters a city name in the React frontend.
2. The frontend sends an HTTP request to the FastAPI server.
3. The server requests weather data from a third-party weather API.
4. The server returns the weather data as a JSON response.
5. The frontend displays the weather information to the user.

---

## ⚙️ Backend Setup (weather-api)

1. Navigate to the backend folder:
   ```bash
   cd weather-api
````

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:

   ```bash
   uvicorn main:app --reload
   ```

4. The API will be available at:

   ```
   http://localhost:8000
   ```

---

## 💻 Frontend Setup (weather-frontend)

1. Navigate to the frontend folder:

   ```bash
   cd weather-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. The application will be available at:

   ```
   http://localhost:3000
   ```

---

## 📡 Example API Endpoint

```
GET /weather?city=Abuja
```

### Sample Response

```json
{
  "city": "Abuja",
  "temperature": 30,
  "description": "Clear sky",
  "humidity": 60
}
```

---

## 🚀 Features

* Client–server architecture
* Real-time weather data
* RESTful API communication
* Clean separation of frontend and backend

---

## 📌 Notes

* A valid weather API key is required.
* CORS is enabled on the backend to allow requests from the frontend.

---

## 👤 Author

Developed as a **Client–Server Application project** using **FastAPI and React**.

```

---

If you want, I can:
- Shorten it for a **school assignment**
- Add **screenshots section**
- Customize it to match your **exact endpoint names**
- Add **deployment instructions (Render / Vercel)**

Just tell me 👍
```
