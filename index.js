let currentDate = new Date();

let currentDay = currentDate.getDay();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDayOfWeek = daysOfWeek[currentDay];

let heading = document.querySelector("p");
heading.textContent = ` ${currentDayOfWeek} ${currentHour}:${currentMinute}`;


function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
}
let form = document.querySelector("#form-text");
form.addEventListener("submit", search);


function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `<strong>${temperature}°</strong>`;
}

function searchTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "849c32d5bde59a0cfd21cd3929dc7c16";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#form-text");
searchForm.addEventListener("submit", searchTemp);


function showLocationTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let locationTemp = document.querySelector("#temp");
  locationTemp.innerHTML = `<strong>${temperature}°</strong>`;
  let city = document.querySelector("#city");
  city.innerHTML = `<strong>${response.data.name}<strong>`;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "849c32d5bde59a0cfd21cd3929dc7c16";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showLocationTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationButton = document.querySelector("#location-temp");
locationButton.addEventListener("click", getCurrentPosition);






function CelusToFarenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  let farenheitTemp = temperature.innerHTML;
  temperature.innerHTML = Math.round((farenheitTemp * 9) / 5 + 32);
}
let farenheit = document.querySelector("#fahrenheit-link");
farenheit.addEventListener("click", CelusToFarenheit);

function FarenheitToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = `18`;
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", FarenheitToCelsius);
