const API_URL = "https://client-server-application-veritas.onrender.com";

async function fetchWeather(city) {
  try {
    const response = await fetch(`${API_URL}/weather?city=${city}`);

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    updateUI(data);
  } catch (err) {
    alert(err.message);
  }
}

function updateUI(data) {
  // main temperature
  document.getElementById("temp-value").innerHTML = `${Math.round(
    data.main.temp
  )}°`;

  // city name
  document.querySelector(".city-name").innerHTML = data.name;

  // date/time
  const now = new Date();
  document.getElementById("date-time").innerHTML = now.toLocaleString();

  // weather icon + desc
  document.getElementById("weather-main").innerHTML = data.weather[0].main;
  document.getElementById("weather-desc").innerHTML =
    data.weather[0].description;

  // details section
  document.getElementById("detail-clouds").innerHTML = data.clouds.all + "%";
  document.getElementById("detail-humidity").innerHTML =
    data.main.humidity + "%";
  document.getElementById("detail-wind").innerHTML = data.wind.speed + " km/h";
  document.getElementById("detail-rain").innerHTML = data.rain
    ? (data.rain["1h"] || 0) + " mm"
    : "0 mm";
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[name='location']");
  const searchBtn = document.getElementById("search-btn");

  // search click
  searchBtn.addEventListener("click", () => {
    const city = input.value.trim();
    if (city) fetchWeather(city);
  });

  // enter key support
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const city = input.value.trim();
      if (city) fetchWeather(city);
    }
  });

  // suggestion click
  document.querySelectorAll(".suggestion").forEach((item) => {
    item.addEventListener("click", () => {
      fetchWeather(item.textContent);
    });
  });
});
