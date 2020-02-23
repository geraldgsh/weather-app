/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import { cityList, City } from './constructor';

const updateLocalStorage = (arr) => {
  window.localStorage.setItem('cityList', JSON.stringify(arr));
};

const foreignCelsiusTemp = (mainTemp, id) => {
  const ele = `foreignTemp${id}`;
  const foreignTemp = document.getElementById(ele);
  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°C`;
};

const foreignFahrenheitTemp = (mainTemp, id) => {
  const ele = `foreignTemp${id}`;
  const foreignTemp = document.getElementById(ele);
  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°F`;
};

const foreignCelsiusFeel = (feel, id) => {
  const ele = `foreignFeel${id}`;
  const foreignFeel = document.getElementById(ele);
  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°C`;
};

const foreignFahrenheitFeel = (feel, id) => {
  const ele = `foreignFeel${id}`;
  const foreignFeel = document.getElementById(ele);
  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°F`;
};

const foreignCelsiusMin = (min, id) => {
  const ele = `foreignLow${id}`;
  const foreignLow = document.getElementById(ele);
  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°C`;
};

const foreignFahrenheitMin = (min, id) => {
  const ele = `foreignLow${id}`;
  const foreignLow = document.getElementById(ele);
  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°F`;
};

const foreignCelsiusMax = (max, id) => {
  const ele = `foreignHigh${id}`;
  const foreignHigh = document.getElementById(ele);
  foreignHigh.innerHTML = `Max Temp: ${Math.floor(max)}°C`;
};

const foreignFahrenheitMax = (max, id) => {
  const ele = `foreignHigh${id}`;
  const foreignLow = document.getElementById(ele);
  foreignLow.innerHTML = `Max Temp: ${Math.floor(max)}°F`;
};

const getflickrImg = (foreignCityName, id) => {
  const tags = foreignCityName;
  const script = document.createElement('script');
  script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=${tags}`;
  document.head.appendChild(script);
  const photoID = id;
  window.cb = function cb(data) {
    const ele = `cityPic${photoID}`;
    const image = document.getElementById(ele);
    image.setAttribute('src', data.items[0].media.m);
  };
};

const getSunrise = (timezone, sunrise, id) => {
  const foreignTiming = timezone;
  const date = new Date(sunrise * 1000);
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming / 3600;
  const format = { hour: 'numeric', minute: 'numeric' };
  const ele = `sunrise${id}`;
  const sunriseTime = document.getElementById(ele);
  sunriseTime.innerHTML = `Sunrise: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;
};

const getSunset = (timezone, sunset, id) => {
  const foreignTiming = timezone;
  const date = new Date(sunset * 1000);
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming / 3600;
  const format = { hour: 'numeric', minute: 'numeric' };
  const ele = `sunset${id}`;
  const sunsetTime = document.getElementById(ele);
  sunsetTime.innerHTML = `Sunset: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;
};

const renderForeignCard = (description, foreignIcon, foreignPressure,
  humidity, windSpeed, timezone, name, id) => {
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = timezone / 3600;
  const format = {
    month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
  };
  const foreignTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleDateString('en-US', format);
  const list = document.getElementById('list');
  const item = `
    <div class='card'>
      <header class='card-header'>
        <div class='column has-text-centered left-col'>
          <img id='foreignIcon' src='https://openweathermap.org/img/wn/${foreignIcon}@2x.png'>
          <p class='heading' id='weatherCondition'>${description}</p>
          <p class='heading' id='foreignTemp${id}'></p>
        </div>
        <div class='column has-text-centered right-col'>
          <div id='cityImage'>
            <img id='cityPic${id}'>
          </div>
        </div>
      </header>
      <div class='card-content'>
        <div class='content'>
          <h4 id='foreignCity' class='is-4' style='color: white;'>${name}</h4>
          <p id='foreignTime'>${foreignTime}</p>
          <div class='row'>
            <div class='columns'>
              <div class='column'>
                <p id='foreignFeel${id}'></p>
                <p id='foreignLow${id}'></p>
                <p id='foreignHigh${id}'></p>
                <p id='foreignPressure'>Pressure: ${foreignPressure}hPa</p>
              </div>
              <div class='column'>
                <p id='windSpeed'>Wind Speed: ${windSpeed}m/s</p>
                <p id='humidity'>Humidity: ${humidity}%</p>
                <p id='sunrise${id}'></p>
                <p id='sunset${id}'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
};

const fetchForeignCityWeather = (cityName, id, unit) => {
  const location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
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
    console.log('nah');
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
  console.warn(unit);
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
  console.warn(unit);
  const location = cityInput;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
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
