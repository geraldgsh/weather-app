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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/localControl.js */ \"./src/modules/localControl.js\");\n\r\n\r\nconst start = () => {\r\n  Object(_modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchLocalCityName\"])();\r\n}\r\nstart();\r\n\r\nfunction toggle() {\r\n  const clear = document.getElementById('list');\r\n  clear.innerHTML = '';\r\n  const btn = document.getElementById('unit');\r\n  if (btn.innerHTML == \"Celsius\") {\r\n    btn.innerHTML = \"Fahrenheit\";\r\n    unit = \"imperial\";    \r\n    // toggleRender(unit);\r\n    Object(_modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchLocalCityName\"])(unit);\r\n  } else {\r\n    btn.innerHTML = \"Celsius\";\r\n    unit = \"metric\";\r\n    // toggleRender(unit);\r\n    Object(_modules_localControl_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchLocalCityName\"])(unit);\r\n  }\r\n}\r\n\r\nconst toggleTime = (function(){\r\n  const unit =  document.getElementById('unit');\r\n  unit.addEventListener(\"click\", toggle);\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/localControl.js":
/*!*************************************!*\
  !*** ./src/modules/localControl.js ***!
  \*************************************/
/*! exports provided: fetchLocalCityName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLocalCityName\", function() { return fetchLocalCityName; });\nconst fetchLocalCityName = (unit = \"metric\") => {\r\n  fetch('https://ipinfo.io?token=311875147c07c2', {mode: 'cors'})\r\n .then(response => response.json())\r\n .then(function(response) {\r\n  fetchLocalCityWeather(response.city, unit);\r\n })\r\n .catch(error => console.log(error))\r\n};\r\n\r\nconst fetchLocalCityWeather = (cityName, unit) => {\r\n  let location = cityName;\r\n  const baseUrl = 'https://api.openweathermap.org/data/2.5';\r\n  const key = '05f63ad5080a502f607cfa5b1219794b';\r\n  const value = unit;\r\n  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;\r\n  fetch(url, {mode: 'cors'})\r\n  .then((response => response.json()))\r\n  .then(function(response) {\r\n    const {\r\n      weather: [{ icon }],\r\n      name,\r\n    } = response;\r\n    renderLocalCard(name, icon);\r\n    if (unit === 'metric') {\r\n      localCelcius(response.main.temp);\r\n    } else {\r\n      localFahrenheit(response.main.temp);\r\n    } \r\n })\r\n .catch(error => console.log(error))\r\n}\r\n\r\nconst localCelcius = (tempLocal) => {\r\n  const celsiusTemp = document.getElementById('localTemp');\r\n  celsiusTemp.innerHTML = \"Local Temp: \" + Math.floor(tempLocal) + \"°C\";\r\n}\r\n\r\nconst localFahrenheit = (tempLocal) => {\r\n  const fahrenheitTemp = document.getElementById('localTemp');\r\n  fahrenheitTemp.innerHTML = \"Local Temp: \" + Math.floor(tempLocal) + \"°F\";\r\n}\r\n\r\nconst renderLocalCard = (localCity, localIcon) => {\r\n  const format = {weekday:\"long\", month:\"short\", day:\"numeric\", hour: 'numeric', minute: 'numeric'};\r\n  const today = new Date();\r\n  const dateElement = today.toLocaleDateString(\"en-US\", format);  \r\n  localWeather.innerHTML = `\r\n      <div>        \r\n        <img id=\"localIcon\" src='https://openweathermap.org/img/wn/${localIcon}@2x.png'>\r\n        <p id=\"localTemp\" class=\"heading\"></p>\r\n        <p id=\"date\" class=\"date\">${dateElement}<p>\r\n\t\t\t\t<p id=\"localCity\" class=\"title\">${localCity}</p>\r\n\t\t\t</div>`\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/localControl.js?");

/***/ })

/******/ });