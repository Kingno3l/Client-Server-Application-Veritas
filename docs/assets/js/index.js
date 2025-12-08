const API_BASE =
  "https://client-server-application-veritas.onrender.com/weather";

const input = document.querySelector("input[name='location']");
const searchBtn = document.getElementById("search-btn");

// display fields
const tempValue = document.getElementById("temp-value");
const cityName = document.querySelector(".city-name");
const dateTime = document.getElementById("date-time");
const weatherMain = document.getElementById("weather-main");
const weatherDesc = document.getElementById("weather-desc");

const cloudsDetail = document.getElementById("detail-clouds");
const humidDetail = document.getElementById("detail-humidity");
const windDetail = document.getElementById("detail-wind");
const rainDetail = document.getElementById("detail-rain");

// Format date
function formatDate() {
  const now = new Date();
  return now.toLocaleString("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Fetch weather data
async function fetchWeather(city) {
  try {
    let res = await fetch(`${API_BASE}?city=${city}`);

    if (!res.ok) {
      alert("City not found!");
      return;
    }

    let data = await res.json();

    // Update UI
    tempValue.textContent = `${data.main.temp}°`;
    cityName.textContent = data.name;
    dateTime.textContent = formatDate();
    weatherMain.textContent = data.weather[0].main;
    weatherDesc.textContent = data.weather[0].description;

    cloudsDetail.textContent = `Clouds: ${data.clouds.all}%`;
    humidDetail.textContent = `Humidity: ${data.main.humidity}%`;
    windDetail.textContent = `Wind: ${data.wind.speed} km/h`;
    rainDetail.textContent = `Rain: ${data.rain ? data.rain["1h"] : 0} mm`;
  } catch (error) {
    alert("Could not load weather.");
    console.error(error);
  }
}

// Search button
searchBtn.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) fetchWeather(city);
});

// Enter key
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const city = input.value.trim();
    if (city) fetchWeather(city);
  }
});

// ❗ Default load → Abuja
window.onload = () => {
  fetchWeather("Abuja");
};
