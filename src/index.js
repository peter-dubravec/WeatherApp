import { getData } from "./modules/getWeather.js";
import "./style.css";
let form = document.querySelector("form");
form.addEventListener("submit", getData);
