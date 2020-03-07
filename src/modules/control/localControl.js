/* eslint-disable no-console */
import { renderLocalCard, localCelsius, localFahrenheit } from '../DOM/localDOM';
import { cityEntry, CurrentCity } from '../constructor/localConstructor';

const updateLocalStorage = (arr) => {
  window.localStorage.setItem('cityEntry', JSON.stringify(arr));
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
    .catch((error) => console.error(error));
};

const singleRender = (unit) => {
  const cityEntry = JSON.parse(localStorage.getItem('cityEntry'));
  cityEntry.forEach((city) => {
    fetchLocalCityWeather(city.city, unit);
  });
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
