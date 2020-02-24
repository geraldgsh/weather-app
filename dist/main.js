/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/localControl.js */ \"./src/modules/localControl.js\");\n/* harmony import */ var _modules_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/foreignControl.js */ \"./src/modules/foreignControl.js\");\n/* harmony import */ var _modules_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/constructor.js */ \"./src/modules/constructor.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-alert */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable import/extensions */\r\n\r\n\r\n\r\n\r\n\r\nconst unit = 'metric';\r\n\r\nfunction toggle() {\r\n  const clear = document.getElementById('list');\r\n  clear.innerHTML = '';\r\n  const btn = document.getElementById('measure');\r\n  if (btn.innerHTML === 'Fahrenheit') {\r\n    btn.innerHTML = 'Celsius';\r\n    const unit = 'metric';\r\n    Object(_modules_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleRender\"])(unit);\r\n    Object(_modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"singleRender\"])(unit);\r\n  } else if (btn.innerHTML === 'Celsius') {\r\n    btn.innerHTML = 'Fahrenheit';\r\n    const unit = 'imperial';\r\n    Object(_modules_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleRender\"])(unit);\r\n    Object(_modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"singleRender\"])(unit);\r\n  }\r\n}\r\n\r\nconst toggleTime = (() => {\r\n  const unit = document.getElementById('measure');\r\n  unit.addEventListener('click', toggle);\r\n})();\r\n\r\nconst purge = (() => {\r\n  const clearAll = document.getElementById('clearAll');\r\n  clearAll.addEventListener('click', () => {\r\n    localStorage.clear();\r\n    window.location.reload();\r\n  });\r\n})();\r\n\r\nconst start = () => {\r\n  Object(_modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchLocalCityName\"])(unit);\r\n  Object(_modules_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleRender\"])(unit);\r\n};\r\nstart();\r\n\r\nconst findCity = () => {\r\n  const cityInput = document.getElementById('cityInput').value;\r\n  if (_modules_constructor_js__WEBPACK_IMPORTED_MODULE_2__[\"cityList\"].some((city) => city.name === cityInput)) {\r\n    alert('Duplicate city!');\r\n  } else {\r\n    Object(_modules_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"checkCity\"])(cityInput, unit);\r\n  }\r\n};\r\n\r\nconst citySearch = (() => {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    document.getElementById('citySearch').addEventListener('click', findCity);\r\n  });\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/*! exports provided: cityList, City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityList\", function() { return cityList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"City\", function() { return City; });\nconst cityList = [];\n\nfunction City(name, id) {\n  this.name = name;\n  this.id = id;\n}\n\n//# sourceURL=webpack:///./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/foreignControl.js":
/*!***************************************!*\
  !*** ./src/modules/foreignControl.js ***!
  \***************************************/
/*! exports provided: toggleRender, checkCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleRender\", function() { return toggleRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCity\", function() { return checkCity; });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/modules/constructor.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-undef */\r\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable no-alert */\r\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-console */\r\n\r\n\r\nconst updateLocalStorage = (arr) => {\r\n  window.localStorage.setItem('cityList', JSON.stringify(arr));\r\n};\r\n\r\nconst foreignCelsiusTemp = (mainTemp, id) => {\r\n  const ele = `foreignTemp${id}`;\r\n  const foreignTemp = document.getElementById(ele);\r\n  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°C`;\r\n};\r\n\r\nconst foreignFahrenheitTemp = (mainTemp, id) => {\r\n  const ele = `foreignTemp${id}`;\r\n  const foreignTemp = document.getElementById(ele);\r\n  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°F`;\r\n};\r\n\r\nconst foreignCelsiusFeel = (feel, id) => {\r\n  const ele = `foreignFeel${id}`;\r\n  const foreignFeel = document.getElementById(ele);\r\n  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°C`;\r\n};\r\n\r\nconst foreignFahrenheitFeel = (feel, id) => {\r\n  const ele = `foreignFeel${id}`;\r\n  const foreignFeel = document.getElementById(ele);\r\n  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°F`;\r\n};\r\n\r\nconst foreignCelsiusMin = (min, id) => {\r\n  const ele = `foreignLow${id}`;\r\n  const foreignLow = document.getElementById(ele);\r\n  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°C`;\r\n};\r\n\r\nconst foreignFahrenheitMin = (min, id) => {\r\n  const ele = `foreignLow${id}`;\r\n  const foreignLow = document.getElementById(ele);\r\n  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°F`;\r\n};\r\n\r\nconst foreignCelsiusMax = (max, id) => {\r\n  const ele = `foreignHigh${id}`;\r\n  const foreignHigh = document.getElementById(ele);\r\n  foreignHigh.innerHTML = `Max Temp: ${Math.floor(max)}°C`;\r\n};\r\n\r\nconst foreignFahrenheitMax = (max, id) => {\r\n  const ele = `foreignHigh${id}`;\r\n  const foreignLow = document.getElementById(ele);\r\n  foreignLow.innerHTML = `Max Temp: ${Math.floor(max)}°F`;\r\n};\r\n\r\nconst getflickrImg = (foreignCityName, id) => {\r\n  const tags = foreignCityName;\r\n  const script = document.createElement('script');\r\n  script.src = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=${tags}`;\r\n  document.head.appendChild(script);\r\n  const photoID = id;\r\n  window.cb = function cb(data) {\r\n    const ele = `cityPic${photoID}`;\r\n    const image = document.getElementById(ele);\r\n    image.setAttribute('src', data.items[0].media.m);\r\n  };\r\n};\r\n\r\nconst getSunrise = (timezone, sunrise, id) => {\r\n  const foreignTiming = timezone;\r\n  const date = new Date(sunrise * 1000);\r\n  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);\r\n  const timeOffset = foreignTiming / 3600;\r\n  const format = { hour: 'numeric', minute: 'numeric' };\r\n  const ele = `sunrise${id}`;\r\n  const sunriseTime = document.getElementById(ele);\r\n  sunriseTime.innerHTML = `Sunrise: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;\r\n};\r\n\r\nconst getSunset = (timezone, sunset, id) => {\r\n  const foreignTiming = timezone;\r\n  const date = new Date(sunset * 1000);\r\n  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);\r\n  const timeOffset = foreignTiming / 3600;\r\n  const format = { hour: 'numeric', minute: 'numeric' };\r\n  const ele = `sunset${id}`;\r\n  const sunsetTime = document.getElementById(ele);\r\n  sunsetTime.innerHTML = `Sunset: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;\r\n};\r\n\r\nconst renderForeignCard = (description, foreignIcon, foreignPressure,\r\n  humidity, windSpeed, timezone, name, id) => {\r\n  const date = new Date();\r\n  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);\r\n  const timeOffset = timezone / 3600;\r\n  const format = {\r\n    month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',\r\n  };\r\n  const foreignTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleDateString('en-US', format);\r\n  const list = document.getElementById('list');\r\n  const item = `\r\n    <div class='card'>\r\n      <header class='card-header'>\r\n        <div class='column has-text-centered left-col'>\r\n          <img id='foreignIcon' src='https://openweathermap.org/img/wn/${foreignIcon}@2x.png'>\r\n          <p class='heading' id='weatherCondition'>${description}</p>\r\n          <p class='heading' id='foreignTemp${id}'></p>\r\n        </div>\r\n        <div class='column has-text-centered right-col'>\r\n          <div id='cityImage'>\r\n            <img id='cityPic${id}'>\r\n          </div>\r\n        </div>\r\n      </header>\r\n      <div class='card-content'>\r\n        <div class='content'>\r\n          <h4 id='foreignCity' class='is-4' style='color: white;'>${name}</h4>\r\n          <p id='foreignTime'>${foreignTime}</p>\r\n          <div class='row'>\r\n            <div class='columns'>\r\n              <div class='column'>\r\n                <p id='foreignFeel${id}'></p>\r\n                <p id='foreignLow${id}'></p>\r\n                <p id='foreignHigh${id}'></p>\r\n                <p id='foreignPressure'>Pressure: ${foreignPressure}hPa</p>\r\n              </div>\r\n              <div class='column'>\r\n                <p id='windSpeed'>Wind Speed: ${windSpeed}m/s</p>\r\n                <p id='humidity'>Humidity: ${humidity}%</p>\r\n                <p id='sunrise${id}'></p>\r\n                <p id='sunset${id}'></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>`;\r\n  const position = 'beforeend';\r\n  list.insertAdjacentHTML(position, item);\r\n};\r\n\r\nconst fetchForeignCityWeather = (cityName, id, unit) => {\r\n  const location = cityName;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = '05f63ad5080a502f607cfa5b1219794b';\r\n  const value = unit;\r\n  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then(((response) => response.json()))\r\n    .then((response) => {\r\n      const {\r\n        weather: [{ description, icon }],\r\n        main: { pressure, humidity },\r\n        wind: { speed },\r\n        sys: { sunrise, sunset },\r\n        timezone,\r\n        name,\r\n      } = response;\r\n      renderForeignCard(description, icon, pressure, humidity, speed, timezone, name, id);\r\n      if (unit === 'metric') {\r\n        foreignCelsiusTemp(response.main.temp, id);\r\n        foreignCelsiusFeel(response.main.feels_like, id);\r\n        foreignCelsiusMin(response.main.temp_min, id);\r\n        foreignCelsiusMax(response.main.temp_max, id);\r\n      } else {\r\n        foreignFahrenheitTemp(response.main.temp, id);\r\n        foreignFahrenheitFeel(response.main.feels_like, id);\r\n        foreignFahrenheitMin(response.main.temp_min, id);\r\n        foreignFahrenheitMax(response.main.temp_max, id);\r\n      }\r\n      getflickrImg(name, id);\r\n      getSunrise(timezone, sunrise, id);\r\n      getSunset(timezone, sunset, id);\r\n    })\r\n    .catch((error) => console.warn(error));\r\n};\r\n\r\nconst toggleRender = (unit) => {\r\n  const cityListing = JSON.parse(localStorage.getItem('cityList'));\r\n  const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));\r\n  async function asyncForEach(array, callback) {\r\n    for (let index = 0; index < array.length; index++) {\r\n      // eslint-disable-next-line no-await-in-loop\r\n      await callback(array[index], index, array);\r\n    }\r\n  }\r\n  if (cityListing === null) {\r\n    console.log('nah');\r\n  } else {\r\n    const init = async () => {\r\n      await asyncForEach(cityListing, async (city) => {\r\n        await waitFor(900);\r\n        fetchForeignCityWeather(city.name, city.id, unit);\r\n      });\r\n    };\r\n    init();\r\n  }\r\n};\r\n\r\nconst addCityToList = (cityName, unit) => {\r\n  console.warn(unit);\r\n  if (_constructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"].some((city) => city.name === cityName)) {\r\n    alert('Duplicate city!');\r\n  } else {\r\n    const id = _constructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"].length;\r\n    const newCity = new _constructor__WEBPACK_IMPORTED_MODULE_0__[\"City\"](cityName, id);\r\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"].push(newCity);\r\n    updateLocalStorage(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"]);\r\n    fetchForeignCityWeather(cityName, id, unit);\r\n  }\r\n};\r\n\r\nconst checkCity = (cityInput, unit) => {\r\n  console.warn(unit);\r\n  const location = cityInput;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = '05f63ad5080a502f607cfa5b1219794b';\r\n  const url = `${baseUrl}/weather?q=${location}&APPID=${key}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      addCityToList(response.name, unit);\r\n    })\r\n    .catch((error) => {\r\n      alert('Invalid city');\r\n      console.log(error);\r\n    });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/foreignControl.js?");

/***/ }),

/***/ "./src/modules/localControl.js":
/*!*************************************!*\
  !*** ./src/modules/localControl.js ***!
  \*************************************/
/*! exports provided: singleRender, fetchLocalCityName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"singleRender\", function() { return singleRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLocalCityName\", function() { return fetchLocalCityName; });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable no-console */\r\n\r\nconst cityEntry = [];\r\nfunction CurrentCity(city, unit) {\r\n  this.city = city;\r\n  this.unit = unit;\r\n}\r\n\r\nconst localCelsius = (tempLocal) => {\r\n  const celsiusTemp = document.getElementById('localTemp');\r\n  celsiusTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°C`;\r\n};\r\n\r\nconst localFahrenheit = (tempLocal) => {\r\n  const fahrenheitTemp = document.getElementById('localTemp');\r\n  fahrenheitTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°F`;\r\n};\r\n\r\nconst renderLocalCard = (localCity, localIcon) => {\r\n  const format = {\r\n    weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',\r\n  };\r\n  const today = new Date();\r\n  const dateElement = today.toLocaleDateString('en-US', format);\r\n  const localWeather = document.getElementById('localWeather');\r\n  localWeather.innerHTML = `\r\n    <div>        \r\n      <img id='localIcon' src='https://openweathermap.org/img/wn/${localIcon}@2x.png'>\r\n      <p id='localTemp' class='heading'></p>\r\n      <p id='date' class='date'>${dateElement}<p>\r\n      <p id='localCity' class='title'>${localCity}</p>\r\n    </div>`;\r\n};\r\n\r\nconst fetchLocalCityWeather = (cityName, unit) => {\r\n  const location = cityName;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = '05f63ad5080a502f607cfa5b1219794b';\r\n  const value = unit;\r\n  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      const {\r\n        weather: [{ icon }],\r\n        name,\r\n      } = response;\r\n      renderLocalCard(name, icon);\r\n      if (unit === 'metric') {\r\n        localCelsius(response.main.temp);\r\n      } else {\r\n        localFahrenheit(response.main.temp);\r\n      }\r\n    })\r\n    .catch((error) => console.log(error));\r\n};\r\n\r\nconst singleRender = (unit) => {\r\n  const cityEntry = JSON.parse(localStorage.getItem('cityEntry'));\r\n  cityEntry.forEach((city) => {\r\n    fetchLocalCityWeather(city.city, unit);\r\n  });\r\n};\r\n\r\nconst updateLocalStorage = (arr) => {\r\n  window.localStorage.setItem('cityEntry', JSON.stringify(arr));\r\n};\r\n\r\nconst addCurrentCity = (city, unit) => {\r\n  const newCity = new CurrentCity(city);\r\n  cityEntry.push(newCity);\r\n  updateLocalStorage(cityEntry);\r\n  singleRender(unit);\r\n};\r\n\r\nconst fetchLocalCityName = (unit) => {\r\n  fetch('https://ipinfo.io?token=311875147c07c2', { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      addCurrentCity(response.city, unit);\r\n    })\r\n    .catch((error) => console.log(error));\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/localControl.js?");

/***/ })

/******/ });