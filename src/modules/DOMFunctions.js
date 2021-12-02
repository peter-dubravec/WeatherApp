function clearBox() {
  let resultBox = document.querySelector(".resultbox");
  while (resultBox.firstChild) {
    resultBox.removeChild(resultBox.firstChild);
  }
  return;
}

function addToPage(data) {
  let cityName = document.createElement("p");
  let weather = document.createElement("p");
  let temperature = document.createElement("p");
  let feelsLike = document.createElement("p");
  let dayMin = document.createElement("p");
  let dayMax = document.createElement("p");

  const resultBox = document.querySelector(".resultbox");

  cityName.textContent = data.city;
  weather.textContent = data.weather;
  temperature.textContent = `${data.temp.temp}°C`;
  feelsLike.textContent = `Feels like: ${data.temp.feels_like}°C`;
  dayMax.textContent = `Day max: ${data.temp.temp_max}°C`;
  dayMin.textContent = `Day min: ${data.temp.temp_min}°C`;

  resultBox.append(cityName, weather, temperature, feelsLike, dayMax, dayMin);
}

export { addToPage, clearBox };
