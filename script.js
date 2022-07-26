/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const cityURL = `?q=${city}`;
  const imperial = `&units=imperial`;
  const BASE_URL = `${URL}/${cityURL}&appid=${API_KEY}${imperial}`;

  fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(weather => showWeatherData(weather));
    

};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city);

};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
 const showWeatherData = (weatherData) => {
  //CODE GOES HERE

  const cityNameHTML = document.getElementById('city-name');
  const weatherTypeHTML = document.getElementById('weather-type');
  const tempHTML = document.getElementById('temp');
  const minTempHTML = document.getElementById('min-temp');
  const maxTempHTML = document.getElementById('max-temp');


  const cityName = weatherData.name;
  const main = weatherData.weather[0].main;
  const temp = weatherData.main.temp;
  const minTemp = weatherData.main.temp_min;
  const maxTemp = weatherData.main.temp_max;

  cityNameHTML.innerText = cityName;
  weatherTypeHTML.innerText = main;
  tempHTML.innerText = temp;
  minTempHTML.innerText = minTemp;
  maxTempHTML.innerText = maxTemp;
  
};

