import { addToPage, clearBox } from "./DOMFunctions.js";

async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a8c12c82833e6b8d192d69b2496b72d0`
    );
    let JSONResponse = await response.json();
    let dataForUse = {
      weather: JSONResponse.weather[0].main,
      city: JSONResponse.name,
      temp: JSONResponse.main,
    };
    return dataForUse;
  } catch (err) {
    alert("City not found");
    throw new Error("Aborted");
  }
}

function convertToCelsius(data) {
  data.temp.temp = (data.temp.temp - 273.15).toFixed(2);
  data.temp.feels_like = (data.temp.feels_like - 273.15).toFixed(2);
  data.temp.temp_max = (data.temp.temp_max - 273.15).toFixed(2);
  data.temp.temp_min = (data.temp.temp_min - 273.15).toFixed(2);
  return data;
}

function getData(e) {
  e.preventDefault();
  let city = document.querySelector("input[type='text'").value;
  getWeather(city).then((response) => {
    let convertedData = convertToCelsius(response);
    clearBox();
    addToPage(convertedData);
  });
}

export { getData };
