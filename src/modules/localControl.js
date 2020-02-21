/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

const localCelcius = (tempLocal) => {
  const celsiusTemp = document.getElementById('localTemp');
  celsiusTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°C`;
};

const localFahrenheit = (tempLocal) => {
  const fahrenheitTemp = document.getElementById('localTemp');
  fahrenheitTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°F`;
};

const renderLocalCard = (localCity, localIcon) => {
  const format = {
    weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
  };
  const today = new Date();
  const dateElement = today.toLocaleDateString('en-US', format);
  const localWeather = document.getElementById('localWeather');
  localWeather.innerHTML = `
    <div>        
      <img id='localIcon' src='https://openweathermap.org/img/wn/${localIcon}@2x.png'>
      <p id='localTemp' class='heading'></p>
      <p id='date' class='date'>${dateElement}<p>
      <p id='localCity' class='title'>${localCity}</p>
    </div>`;
};

const fetchLocalCityWeather = (cityName, unit) => {
  const location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
  const value = unit;
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      const {
        weather: [{ icon }],
        name,
      } = response;
      renderLocalCard(name, icon);
      if (unit === 'metric') {
        localCelcius(response.main.temp);
      } else {
        localFahrenheit(response.main.temp);
      }
    })
    .catch((error) => console.log(error));
};

const fetchLocalCityName = (unit = 'metric') => {
  fetch('https://ipinfo.io?token=311875147c07c2', { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      fetchLocalCityWeather(response.city, unit);
    })
    .catch((error) => console.log(error));
};

export { fetchLocalCityName };
