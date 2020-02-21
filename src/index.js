/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import { fetchLocalCityName } from './modules/localControl.js';
import { toggleRender } from './modules/foreignControl.js';

const start = () => {
  fetchLocalCityName();
  toggleRender();
};
start();

function toggle() {
  const clear = document.getElementById('list');
  clear.innerHTML = '';
  const btn = document.getElementById('unit');
  if (btn.innerHTML === 'Celsius') {
    btn.innerHTML = 'Fahrenheit';
    const unit = 'imperial';
    toggleRender(unit);
    fetchLocalCityName(unit);
  } else {
    btn.innerHTML = 'Celsius';
    const unit = 'metric';
    toggleRender(unit);
    fetchLocalCityName(unit);
  }
}

const toggleTime = (() => {
  const unit = document.getElementById('unit');
  unit.addEventListener('click', toggle);
})();

const purge = (() => {
  const clearAll = document.getElementById('clearAll');
  clearAll.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
  });
})();
