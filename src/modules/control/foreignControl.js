/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */

import { cityList, City } from '../constructor/foreignConstructor';
import {
  renderForeignCard,
  foreignCelsiusTemp,
  foreignFahrenheitTemp,
  foreignCelsiusFeel,
  foreignFahrenheitFeel,
  foreignCelsiusMin,
  foreignFahrenheitMin,
  foreignCelsiusMax,
  foreignFahrenheitMax,
  getSunrise,
  getSunset,
  getflickrImg,
} from '../DOM/foreignDOM';

const updateLocalStorage = (arr) => {
  window.localStorage.setItem('cityList', JSON.stringify(arr));
};

const fetchForeignCityWeather = (cityName, id, unit) => {
  const location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = process.env.OPENKEY;
  const value = unit;
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, { mode: 'cors' })
    .then(((response) => response.json()))
    .then((response) => {
      const {
        weather: [{ description, icon }],
        main: { pressure, humidity },
        wind: { speed },
        sys: { sunrise, sunset },
        timezone,
        name,
      } = response;
      renderForeignCard(description, icon, pressure, humidity, speed, timezone, name, id);
      if (unit === 'metric') {
        foreignCelsiusTemp(response.main.temp, id);
        foreignCelsiusFeel(response.main.feels_like, id);
        foreignCelsiusMin(response.main.temp_min, id);
        foreignCelsiusMax(response.main.temp_max, id);
      } else {
        foreignFahrenheitTemp(response.main.temp, id);
        foreignFahrenheitFeel(response.main.feels_like, id);
        foreignFahrenheitMin(response.main.temp_min, id);
        foreignFahrenheitMax(response.main.temp_max, id);
      }
      getflickrImg(name, id);
      getSunrise(timezone, sunrise, id);
      getSunset(timezone, sunset, id);
    })
    .catch((error) => console.warn(error));
};

const toggleRender = (unit) => {
  const cityListing = JSON.parse(localStorage.getItem('cityList'));
  const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));
  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      // eslint-disable-next-line no-await-in-loop
      await callback(array[index], index, array);
    }
  }
  if (cityListing === null) {
    console.log('List is empty');
  } else {
    const init = async () => {
      await asyncForEach(cityListing, async (city) => {
        await waitFor(900);
        fetchForeignCityWeather(city.name, city.id, unit);
      });
    };
    init();
  }
};

const addCityToList = (cityName, unit) => {
  if (cityList.some((city) => city.name === cityName)) {
    alert('Duplicate city!');
  } else {
    const id = cityList.length;
    const newCity = new City(cityName, id);
    cityList.push(newCity);
    updateLocalStorage(cityList);
    fetchForeignCityWeather(cityName, id, unit);
  }
};

const checkCity = (cityInput, unit) => {
  const location = cityInput;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = process.env.OPENKEY;
  const url = `${baseUrl}/weather?q=${location}&APPID=${key}`;
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      addCityToList(response.name, unit);
    })
    .catch((error) => {
      alert('Invalid city');
      console.log(error);
    });
};

export { toggleRender, checkCity };
