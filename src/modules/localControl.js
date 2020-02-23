/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

const cityEntry = [];
function CurrentCity(city, unit) {
  this.city = city;
  this.unit = unit;
}

const localCelsius = (tempLocal) => {
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
        localCelsius(response.main.temp);
      } else {
        localFahrenheit(response.main.temp);
      }
    })
    .catch((error) => console.log(error));
};

const singleRender = (unit) => {
  const cityEntry = JSON.parse(localStorage.getItem('cityEntry'));
  cityEntry.forEach((city) => {
    fetchLocalCityWeather(city.city, unit);
  });
};

const updateLocalStorage = (arr) => {
  window.localStorage.setItem('cityEntry', JSON.stringify(arr));
};

const addCurrentCity = (city, unit) => {
  const newCity = new CurrentCity(city);
  cityEntry.push(newCity);
  updateLocalStorage(cityEntry);
  singleRender(unit);
};

const fetchLocalCityName = (unit) => {
  fetch('https://ipinfo.io?token=311875147c07c2', { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      addCurrentCity(response.city, unit);
    })
    .catch((error) => console.log(error));
};


export { singleRender, fetchLocalCityName };
