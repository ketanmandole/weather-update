async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "3c102052158eabd0a651151133896854";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weather-result").innerHTML =
        "<p>City not found</p>";
      return;
    }

    document.getElementById("weather-result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.log(error);
  }
}