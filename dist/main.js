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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_control_localControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/control/localControl.js */ \"./src/modules/control/localControl.js\");\n/* harmony import */ var _modules_control_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/control/foreignControl.js */ \"./src/modules/control/foreignControl.js\");\n/* harmony import */ var _modules_constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/constructor/foreignConstructor */ \"./src/modules/constructor/foreignConstructor.js\");\n/* eslint-disable no-alert */\r\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable import/extensions */\r\n\r\n\r\n\r\n\r\n\r\nconst unit = 'metric';\r\n\r\nfunction toggle() {\r\n  const clear = document.getElementById('list');\r\n  clear.innerHTML = '';\r\n  const btn = document.getElementById('measure');\r\n  if (btn.innerHTML === 'Fahrenheit') {\r\n    btn.innerHTML = 'Celsius';\r\n    const unit = 'metric';\r\n    Object(_modules_control_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleRender\"])(unit);\r\n    Object(_modules_control_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"singleRender\"])(unit);\r\n  } else if (btn.innerHTML === 'Celsius') {\r\n    btn.innerHTML = 'Fahrenheit';\r\n    const unit = 'imperial';\r\n    Object(_modules_control_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleRender\"])(unit);\r\n    Object(_modules_control_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"singleRender\"])(unit);\r\n  }\r\n}\r\n\r\nconst toggleTime = (() => {\r\n  const unit = document.getElementById('measure');\r\n  unit.addEventListener('click', toggle);\r\n})();\r\n\r\nconst purge = (() => {\r\n  const clearAll = document.getElementById('clearAll');\r\n  clearAll.addEventListener('click', () => {\r\n    localStorage.clear();\r\n    window.location.reload();\r\n  });\r\n})();\r\n\r\nconst start = () => {\r\n  Object(_modules_control_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchLocalCityName\"])(unit);\r\n  Object(_modules_control_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleRender\"])(unit);\r\n};\r\nstart();\r\n\r\nconst findCity = () => {\r\n  const cityInput = document.getElementById('cityInput').value;\r\n  if (_modules_constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_2__[\"cityList\"].some((city) => city.name === cityInput)) {\r\n    alert('Duplicate city!');\r\n  } else {\r\n    Object(_modules_control_foreignControl_js__WEBPACK_IMPORTED_MODULE_1__[\"checkCity\"])(cityInput, unit);\r\n  }\r\n};\r\n\r\nconst citySearch = (() => {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    document.getElementById('citySearch').addEventListener('click', findCity);\r\n  });\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/foreignDOM.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/foreignDOM.js ***!
  \***************************************/
/*! exports provided: renderForeignCard, foreignCelsiusTemp, foreignFahrenheitTemp, foreignCelsiusFeel, foreignFahrenheitFeel, foreignCelsiusMin, foreignFahrenheitMin, foreignCelsiusMax, foreignFahrenheitMax, getSunrise, getSunset, getflickrImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderForeignCard\", function() { return renderForeignCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignCelsiusTemp\", function() { return foreignCelsiusTemp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignFahrenheitTemp\", function() { return foreignFahrenheitTemp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignCelsiusFeel\", function() { return foreignCelsiusFeel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignFahrenheitFeel\", function() { return foreignFahrenheitFeel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignCelsiusMin\", function() { return foreignCelsiusMin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignFahrenheitMin\", function() { return foreignFahrenheitMin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignCelsiusMax\", function() { return foreignCelsiusMax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreignFahrenheitMax\", function() { return foreignFahrenheitMax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSunrise\", function() { return getSunrise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSunset\", function() { return getSunset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getflickrImg\", function() { return getflickrImg; });\nconst renderForeignCard = (description, foreignIcon, foreignPressure,\n  humidity, windSpeed, timezone, name, id) => {\n  const date = new Date();\n  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);\n  const timeOffset = timezone / 3600;\n  const format = {\n    month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',\n  };\n  const foreignTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleDateString('en-US', format);\n  const list = document.getElementById('list');\n  const item = `\n    <div class='card'>\n      <header class='card-header'>\n        <div class='column has-text-centered left-col'>\n          <img id='foreignIcon' src='https://openweathermap.org/img/wn/${foreignIcon}@2x.png'>\n          <p class='heading' id='weatherCondition'>${description}</p>\n          <p class='heading' id='foreignTemp${id}'></p>\n        </div>\n        <div class='column has-text-centered right-col'>\n          <div id='cityImage'>\n            <img id='cityPic${id}'>\n          </div>\n        </div>\n      </header>\n      <div class='card-content'>\n        <div class='content'>\n          <h4 id='foreignCity' class='is-4' style='color: white;'>${name}</h4>\n          <p id='foreignTime'>${foreignTime}</p>\n          <div class='row'>\n            <div class='columns'>\n              <div class='column'>\n                <p id='foreignFeel${id}'></p>\n                <p id='foreignLow${id}'></p>\n                <p id='foreignHigh${id}'></p>\n                <p id='foreignPressure'>Pressure: ${foreignPressure}hPa</p>\n              </div>\n              <div class='column'>\n                <p id='windSpeed'>Wind Speed: ${windSpeed}m/s</p>\n                <p id='humidity'>Humidity: ${humidity}%</p>\n                <p id='sunrise${id}'></p>\n                <p id='sunset${id}'></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>`;\n  const position = 'beforeend';\n  list.insertAdjacentHTML(position, item);\n};\n\nconst foreignCelsiusTemp = (mainTemp, id) => {\n  const ele = `foreignTemp${id}`;\n  const foreignTemp = document.getElementById(ele);\n  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°C`;\n};\n\nconst foreignFahrenheitTemp = (mainTemp, id) => {\n  const ele = `foreignTemp${id}`;\n  const foreignTemp = document.getElementById(ele);\n  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°F`;\n};\n\nconst foreignCelsiusFeel = (feel, id) => {\n  const ele = `foreignFeel${id}`;\n  const foreignFeel = document.getElementById(ele);\n  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°C`;\n};\n\nconst foreignFahrenheitFeel = (feel, id) => {\n  const ele = `foreignFeel${id}`;\n  const foreignFeel = document.getElementById(ele);\n  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°F`;\n};\n\nconst foreignCelsiusMin = (min, id) => {\n  const ele = `foreignLow${id}`;\n  const foreignLow = document.getElementById(ele);\n  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°C`;\n};\n\nconst foreignFahrenheitMin = (min, id) => {\n  const ele = `foreignLow${id}`;\n  const foreignLow = document.getElementById(ele);\n  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°F`;\n};\n\nconst foreignCelsiusMax = (max, id) => {\n  const ele = `foreignHigh${id}`;\n  const foreignHigh = document.getElementById(ele);\n  foreignHigh.innerHTML = `Max Temp: ${Math.floor(max)}°C`;\n};\n\nconst foreignFahrenheitMax = (max, id) => {\n  const ele = `foreignHigh${id}`;\n  const foreignLow = document.getElementById(ele);\n  foreignLow.innerHTML = `Max Temp: ${Math.floor(max)}°F`;\n};\n\nconst getSunrise = (timezone, sunrise, id) => {\n  const foreignTiming = timezone;\n  const date = new Date(sunrise * 1000);\n  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);\n  const timeOffset = foreignTiming / 3600;\n  const format = { hour: 'numeric', minute: 'numeric' };\n  const ele = `sunrise${id}`;\n  const sunriseTime = document.getElementById(ele);\n  sunriseTime.innerHTML = `Sunrise: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;\n};\n\nconst getSunset = (timezone, sunset, id) => {\n  const foreignTiming = timezone;\n  const date = new Date(sunset * 1000);\n  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);\n  const timeOffset = foreignTiming / 3600;\n  const format = { hour: 'numeric', minute: 'numeric' };\n  const ele = `sunset${id}`;\n  const sunsetTime = document.getElementById(ele);\n  sunsetTime.innerHTML = `Sunset: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;\n};\n\nconst getflickrImg = (foreignCityName, id) => {\n  const tags = foreignCityName;\n  const script = document.createElement('script');\n  script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=${tags}`;\n  document.head.appendChild(script);\n  const photoID = id;\n  window.cb = function cb(data) {\n    const ele = `cityPic${photoID}`;\n    const image = document.getElementById(ele);\n    image.setAttribute('src', data.items[0].media.m);\n  };\n};\n\n\n//# sourceURL=webpack:///./src/modules/DOM/foreignDOM.js?");

/***/ }),

/***/ "./src/modules/DOM/localDOM.js":
/*!*************************************!*\
  !*** ./src/modules/DOM/localDOM.js ***!
  \*************************************/
/*! exports provided: renderLocalCard, localCelsius, localFahrenheit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLocalCard\", function() { return renderLocalCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localCelsius\", function() { return localCelsius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localFahrenheit\", function() { return localFahrenheit; });\nconst renderLocalCard = (localCity, localIcon) => {\n  const format = {\n    weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',\n  };\n  const today = new Date();\n  const dateElement = today.toLocaleDateString('en-US', format);\n  const localWeather = document.getElementById('localWeather');\n  localWeather.innerHTML = `\n    <div>        \n      <img id='localIcon' src='https://openweathermap.org/img/wn/${localIcon}@2x.png'>\n      <p id='localTemp' class='heading'></p>\n      <p id='date' class='date'>${dateElement}<p>\n      <p id='localCity' class='title'>${localCity}</p>\n    </div>`;\n};\n\nconst localCelsius = (tempLocal) => {\n  const celsiusTemp = document.getElementById('localTemp');\n  celsiusTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°C`;\n};\n\nconst localFahrenheit = (tempLocal) => {\n  const fahrenheitTemp = document.getElementById('localTemp');\n  fahrenheitTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°F`;\n};\n\n\n//# sourceURL=webpack:///./src/modules/DOM/localDOM.js?");

/***/ }),

/***/ "./src/modules/constructor/foreignConstructor.js":
/*!*******************************************************!*\
  !*** ./src/modules/constructor/foreignConstructor.js ***!
  \*******************************************************/
/*! exports provided: cityList, City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityList\", function() { return cityList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"City\", function() { return City; });\nconst cityList = [];\r\n\r\nfunction City(name, id) {\r\n  this.name = name;\r\n  this.id = id;\r\n}\n\n//# sourceURL=webpack:///./src/modules/constructor/foreignConstructor.js?");

/***/ }),

/***/ "./src/modules/constructor/localConstructor.js":
/*!*****************************************************!*\
  !*** ./src/modules/constructor/localConstructor.js ***!
  \*****************************************************/
/*! exports provided: cityEntry, CurrentCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityEntry\", function() { return cityEntry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CurrentCity\", function() { return CurrentCity; });\nconst cityEntry = [];\n\nfunction CurrentCity(city, unit) {\n  this.city = city;\n  this.unit = unit;\n}\n\n//# sourceURL=webpack:///./src/modules/constructor/localConstructor.js?");

/***/ }),

/***/ "./src/modules/control/foreignControl.js":
/*!***********************************************!*\
  !*** ./src/modules/control/foreignControl.js ***!
  \***********************************************/
/*! exports provided: toggleRender, checkCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleRender\", function() { return toggleRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCity\", function() { return checkCity; });\n/* harmony import */ var _constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructor/foreignConstructor */ \"./src/modules/constructor/foreignConstructor.js\");\n/* harmony import */ var _DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/foreignDOM */ \"./src/modules/DOM/foreignDOM.js\");\n/* eslint-disable no-alert */\r\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\n\r\nconst updateLocalStorage = (arr) => {\r\n  window.localStorage.setItem('cityList', JSON.stringify(arr));\r\n};\r\n\r\nconst fetchForeignCityWeather = (cityName, id, unit) => {\r\n  const location = cityName;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = \"05f63ad5080a502f607cfa5b1219794b\";\r\n  const value = unit;\r\n  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then(((response) => response.json()))\r\n    .then((response) => {\r\n      const {\r\n        weather: [{ description, icon }],\r\n        main: { pressure, humidity },\r\n        wind: { speed },\r\n        sys: { sunrise, sunset },\r\n        timezone,\r\n        name,\r\n      } = response;\r\n      Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"renderForeignCard\"])(description, icon, pressure, humidity, speed, timezone, name, id);\r\n      if (unit === 'metric') {\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignCelsiusTemp\"])(response.main.temp, id);\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignCelsiusFeel\"])(response.main.feels_like, id);\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignCelsiusMin\"])(response.main.temp_min, id);\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignCelsiusMax\"])(response.main.temp_max, id);\r\n      } else {\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignFahrenheitTemp\"])(response.main.temp, id);\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignFahrenheitFeel\"])(response.main.feels_like, id);\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignFahrenheitMin\"])(response.main.temp_min, id);\r\n        Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"foreignFahrenheitMax\"])(response.main.temp_max, id);\r\n      }\r\n      Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"getflickrImg\"])(name, id);\r\n      Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"getSunrise\"])(timezone, sunrise, id);\r\n      Object(_DOM_foreignDOM__WEBPACK_IMPORTED_MODULE_1__[\"getSunset\"])(timezone, sunset, id);\r\n    })\r\n    .catch((error) => console.warn(error));\r\n};\r\n\r\nconst toggleRender = (unit) => {\r\n  const cityListing = JSON.parse(localStorage.getItem('cityList'));\r\n  const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));\r\n  async function asyncForEach(array, callback) {\r\n    for (let index = 0; index < array.length; index++) {\r\n      // eslint-disable-next-line no-await-in-loop\r\n      await callback(array[index], index, array);\r\n    }\r\n  }\r\n  if (cityListing === null) {\r\n    console.log('List is empty');\r\n  } else {\r\n    const init = async () => {\r\n      await asyncForEach(cityListing, async (city) => {\r\n        await waitFor(900);\r\n        fetchForeignCityWeather(city.name, city.id, unit);\r\n      });\r\n    };\r\n    init();\r\n  }\r\n};\r\n\r\nconst addCityToList = (cityName, unit) => {\r\n  if (_constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"].some((city) => city.name === cityName)) {\r\n    alert('Duplicate city!');\r\n  } else {\r\n    const id = _constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"].length;\r\n    const newCity = new _constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_0__[\"City\"](cityName, id);\r\n    _constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"].push(newCity);\r\n    updateLocalStorage(_constructor_foreignConstructor__WEBPACK_IMPORTED_MODULE_0__[\"cityList\"]);\r\n    fetchForeignCityWeather(cityName, id, unit);\r\n  }\r\n};\r\n\r\nconst checkCity = (cityInput, unit) => {\r\n  const location = cityInput;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = \"05f63ad5080a502f607cfa5b1219794b\";\r\n  const url = `${baseUrl}/weather?q=${location}&APPID=${key}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      addCityToList(response.name, unit);\r\n    })\r\n    .catch((error) => {\r\n      alert('Invalid city');\r\n      console.log(error);\r\n    });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/control/foreignControl.js?");

/***/ }),

/***/ "./src/modules/control/localControl.js":
/*!*********************************************!*\
  !*** ./src/modules/control/localControl.js ***!
  \*********************************************/
/*! exports provided: singleRender, fetchLocalCityName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"singleRender\", function() { return singleRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLocalCityName\", function() { return fetchLocalCityName; });\n/* harmony import */ var _DOM_localDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/localDOM */ \"./src/modules/DOM/localDOM.js\");\n/* harmony import */ var _constructor_localConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constructor/localConstructor */ \"./src/modules/constructor/localConstructor.js\");\n/* eslint-disable no-undef */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\nconst updateLocalStorage = (arr) => {\r\n  window.localStorage.setItem('cityEntry', JSON.stringify(arr));\r\n};\r\n\r\nconst fetchLocalCityWeather = (cityName, unit) => {\r\n  const location = cityName;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = \"05f63ad5080a502f607cfa5b1219794b\";\r\n  const value = unit;\r\n  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      const {\r\n        weather: [{ icon }],\r\n        name,\r\n      } = response;\r\n      Object(_DOM_localDOM__WEBPACK_IMPORTED_MODULE_0__[\"renderLocalCard\"])(name, icon);\r\n      if (unit === 'metric') {\r\n        Object(_DOM_localDOM__WEBPACK_IMPORTED_MODULE_0__[\"localCelsius\"])(response.main.temp);\r\n      } else {\r\n        Object(_DOM_localDOM__WEBPACK_IMPORTED_MODULE_0__[\"localFahrenheit\"])(response.main.temp);\r\n      }\r\n    })\r\n    .catch((error) => console.error(error));\r\n};\r\n\r\nconst singleRender = (unit) => {\r\n  const cityEntry = JSON.parse(localStorage.getItem('cityEntry'));\r\n  cityEntry.forEach((city) => {\r\n    fetchLocalCityWeather(city.city, unit);\r\n  });\r\n};\r\n\r\nconst addCurrentCity = (city, unit) => {\r\n  const newCity = new _constructor_localConstructor__WEBPACK_IMPORTED_MODULE_1__[\"CurrentCity\"](city);\r\n  _constructor_localConstructor__WEBPACK_IMPORTED_MODULE_1__[\"cityEntry\"].push(newCity);\r\n  updateLocalStorage(_constructor_localConstructor__WEBPACK_IMPORTED_MODULE_1__[\"cityEntry\"]);\r\n  singleRender(unit);\r\n};\r\n\r\nconst fetchLocalCityName = (unit) => {\r\n  const KEY = \"311875147c07c2\";\r\n  fetch(`https://ipinfo.io?token=${KEY}`, { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((response) => {\r\n      addCurrentCity(response.city, unit);\r\n    })\r\n    .catch((error) => console.log(error));\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/control/localControl.js?");

/***/ })

/******/ });