# Client-Server-Application-Veritas

<a name="readme-top"></a>

<div align="center">

<!-- MAIN HEADING -->

  <h3><b>WEATHER CLIENT–SERVER APPLICATION</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [WEATHER CLIENT–SERVER APPLICATION](#weather-clientserver-application)
  - [🛠 Built With](#-built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [💻 Getting Started](#-getting-started)
    - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Usage](#usage)
  - [🚀 Live Demo](#-live-demo)
  - [👥 Authors](#-authors)
  - [🔭 Future Features](#-future-features)
  - [🤝 Contributing](#-contributing)
  - [⭐️ Show your support](#️-show-your-support)
  - [🙏 Acknowledgments](#-acknowledgments)
  - [📝 License](#-license)

<!-- INTRO -->

# WEATHER CLIENT–SERVER APPLICATION <a name="about-project"></a>

> This is a client–server weather application built with FastAPI for the backend and HTML, CSS, and Vanilla JavaScript for the frontend.  
> The client sends HTTP requests to the server, and the server fetches real-time weather data from an external weather API and returns it to the client.

## 🛠 Built With <a name="built-with"></a>

1. PYTHON
2. FASTAPI
3. HTML
4. CSS
5. JAVASCRIPT

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript (Vanilla)</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://fastapi.tiangolo.com/">FastAPI</a></li>
    <li><a href="https://www.python.org/">Python</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> - Client–server architecture using HTTP  
> - Fetches real-time weather data from an external API  
> - RESTful API built with FastAPI  
> - Frontend built with HTML, CSS, and Vanilla JavaScript  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> To get a local copy of the project, clone the repository:

```sh
git clone https://github.com/your-username/weather-client-server-app.git
cd weather-client-server-app
````

<!-- SETUP -->

### Setup

Navigate to the backend and frontend folders separately to run each service.

### Prerequisites

1. A Browser (Preferably Google Chrome)
2. A Code Editor (VS Code recommended)
3. Python (v3.8+)
4. Internet Connection
5. Git

<!-- INSTALL -->

### Install

#### Backend (weather-api)

```sh
cd weather-api
pip install -r requirements.txt
```

#### Frontend (HTML, CSS & JS)

No installation required.
Simply open the `index.html` file in a browser or use a local server.

### Usage

#### Run Backend Server

```sh
cd weather-api
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

#### Run Frontend

* Open `index.html` in your browser
  **OR**
* Use a local server (recommended):

  ```sh
  python -m http.server
  ```

Frontend runs on:

```
http://localhost:8000 or http://localhost:5500
```

#### API Endpoint Example

```sh
GET /weather?city=Lagos
```

---

## 🚀 Live Demo <a name="live-demo"></a>

* Live demo not available yet

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Your Name**

* GitHub: [@your-github-username](https://github.com/your-github-username)
* LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-linkedin)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

* Add 5-day weather forecast
* Improve UI design
* Add error handling for invalid cities

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTION -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> If you like this project, please give it a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Thanks to the weather API provider and FastAPI documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
```
