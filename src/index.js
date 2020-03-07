/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import { singleRender, fetchLocalCityName } from './modules/control/localControl.js';
import { toggleRender, checkCity } from './modules/control/foreignControl.js';
import { cityList } from './modules/constructor/foreignConstructor';

const unit = 'metric';

function toggle() {
  const clear = document.getElementById('list');
  clear.innerHTML = '';
  const btn = document.getElementById('measure');
  if (btn.innerHTML === 'Fahrenheit') {
    btn.innerHTML = 'Celsius';
    const unit = 'metric';
    toggleRender(unit);
    singleRender(unit);
  } else if (btn.innerHTML === 'Celsius') {
    btn.innerHTML = 'Fahrenheit';
    const unit = 'imperial';
    toggleRender(unit);
    singleRender(unit);
  }
}

const toggleTime = (() => {
  const unit = document.getElementById('measure');
  unit.addEventListener('click', toggle);
})();

const purge = (() => {
  const clearAll = document.getElementById('clearAll');
  clearAll.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
  });
})();

const start = () => {
  fetchLocalCityName(unit);
  toggleRender(unit);
};
start();

const findCity = () => {
  const cityInput = document.getElementById('cityInput').value;
  if (cityList.some((city) => city.name === cityInput)) {
    alert('Duplicate city!');
  } else {
    checkCity(cityInput, unit);
  }
};

const citySearch = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('citySearch').addEventListener('click', findCity);
  });
})();