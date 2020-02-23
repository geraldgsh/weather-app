/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import { singleRender, fetchLocalCityName } from './modules/localControl.js';
import { toggleRender } from './modules/foreignControl.js';

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