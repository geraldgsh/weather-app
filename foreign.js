function toggle() {
  const btn = document.getElementById('unit');
  if (btn.innerHTML == "Celsius") {
  btn.innerHTML = "Fahrenheit";
  unit = "imperial";
  fetchCurrentCityName(unit);
  toggleRender(unit);
  } else {
  btn.innerHTML = "Celsius";
  unit = "metric";
  fetchCurrentCityName(unit);
  toggleRender(unit);
  }
}	

const fetchCurrentCityName = (unit = "metric") => {
  fetch('https://ipinfo.io?token=311875147c07c2', {mode: 'cors'})
 .then(response => response.json())
 .then(function(response) {
    currentCity(response, unit);
 })
 .catch(e => {
    localCity.innerHTML = e;
    console.log(e);
 })
};

(function() {
  fetchCurrentCityName();
})();

const currentCity = (data, unit) => {
  renderCityName(data.city);
  fetchCurrentCityTemp(data.city, unit);				
}

const renderCityName = (cityName) => {
  const localCity = document.getElementById('localCity')
  localCity.innerHTML = cityName;
}

const fetchCurrentCityTemp = (cityName, unit) => {
  let location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
  const value = unit;
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, {mode: 'cors'})
  .then((response => response.json()))
  .then(function(response) {
    getLocalWeather(response, unit);
 })
 .catch(e => {
    localTemp.innerHTML = e;
    console.log(e);
 })
}

const getLocalWeather = (weather, unit) => {
  renderLocalTemp(weather.main.temp, unit);
  let img = weather.weather[0].icon;
  renderLocalWeather(img);
}

const renderLocalTemp = (temp, unit) => {
   const localTemp = document.getElementById('localTemp');
   if (unit === "metric") {			
    localTemp.innerHTML = "Local Temp: " + Math.floor(temp) + "°C";
   } else {
    localTemp.innerHTML = "Local Temp: " + Math.floor(temp) + "°F";
   }
}

const renderLocalWeather = (img) => {
  const localIcon = document.getElementById('localIcon');
  let localLink = "https://openweathermap.org/img/wn/" + img + "@2x.png"
  localIcon.setAttribute("src", localLink)
}

const localTime = (function() {
  const dateElement = document.getElementById("date");
  const format = {weekday:"long", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'};
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString("en-US", format);
})();

let cityList = [];
function City(name) {
  this.name = name;
}

function updateLocalStorage(arr) {
  window.localStorage.setItem('cityList', JSON.stringify(arr));
}

const findCity = () => {	
  const cityInput = document.getElementById('cityInput').value;
  fetchForeignCityWeather(cityInput);
};

const addCityToList = (cityName) => {
  // const cityList = JSON.parse(localStorage.getItem("cityList"))
  if(cityList.some(city => city.name === cityName)) {
    console.log('Dup!');
  } else {
    const newCity = new City(cityName);
    cityList.push(newCity);
    updateLocalStorage(cityList);
  }  
}

const toggleRender = (unit) => {
  const cityList = JSON.parse(localStorage.getItem("cityList"))
  cityList.forEach((city) => {
    fetchForeignCityWeather(city.name, unit);
  })
}

const fetchForeignCityWeather = (cityName, unit = 'metric') => {
  let location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
  const value = unit;
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, {mode: 'cors'})
  .then((response => response.json()))
  .then(function(response) {
    addCityToList(cityName);
    renderCard();
    getForeignWeather(response, unit);    
  })
  .catch(e => {
    alert("Invalid City")
    console.log(e);
   })
} 

const getForeignWeather = (weather, unit) => {
  renderForeignCityName(weather.name);
  renderForeignTemp(weather.main.temp, unit);
  let icon = weather.weather[0].icon;
  renderForeignWeather(icon);
  flickrImage(weather.name);
  const clearSearch = document.getElementById('cityInput');
  clearSearch.innerHTML = "";
  renderForeignTime(weather.timezone);
  const desc = weather.weather[0].description;
  renderWeatherDescription(desc);
  renderCardContent(weather, unit);
}

const renderForeignCityName = (foreignCityName) => {
  const foreignCity = document.getElementById('foreignCity')
  foreignCity.innerHTML = foreignCityName;
}

const renderForeignTemp = (foreignTemp, unit) => {
  const foreigntemp = document.getElementById('foreignTemp')
  if (unit == 'metric') {
    foreigntemp.innerHTML = "Local Temp: " + Math.floor(foreignTemp) + "°C";
  } else {
    foreigntemp.innerHTML = "Local Temp: " + Math.floor(foreignTemp) + "°F";
  }  
}

const renderForeignWeather = (icon) => {
  const foreignIcon = document.getElementById('foreignIcon');
  let foreignLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
  foreignIcon.setAttribute("src", foreignLink)
}

const flickrImage = (foreignCityName) => {
  window.cb = function(data) {
    console.log(data);
    const image = document.getElementById('cityPic');
    image.setAttribute('src', data.items[0].media.m);
  };
  const tags = foreignCityName;
  const script = document.createElement('script');
  script.src = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=" + tags;
  document.head.appendChild(script);
};

const renderForeignTime = (foreignTiming) => {
  const foreignTime = document.getElementById('foreignTime')
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming/3600;
  const format = {month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'};
  const newTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleDateString("en-US", format);
  foreignTime.innerHTML = newTime;
}

const renderWeatherDescription = (desc) => {
  const weatherCondition = document.getElementById('weatherCondition');
  weatherCondition.innerHTML = desc;
}

const sunTiming = (timeZone, sunTime) => {
  const foreignTiming = timeZone;
  const date = new Date(sunTime * 1000);
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming/3600;
  const format = {hour: 'numeric', minute: 'numeric'};
  const sunnyTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString("en-US", format);
  return sunnyTime;
} 

const renderCardContent = (details, unit) => {
  const foreignFeel = document.getElementById('foreignFeel');
  const foreignLow = document.getElementById('foreignLow');
  const foreignHigh = document.getElementById('foreignHigh');

  if (unit == 'metric') {
    foreignFeel.innerHTML = "Feels Like: " + Math.floor(details.main.feels_like) + "°C";
    foreignLow.innerHTML = "Min Temp: " + Math.floor(details.main.temp_min) + "°C";
    foreignHigh.innerHTML = "Max Temp: " + Math.floor(details.main.temp_max) + "°C";
  } else {
    foreignFeel.innerHTML = "Feels Like: " + Math.floor(details.main.feels_like) + "°F";
    foreignLow.innerHTML = "Min Temp: " + Math.floor(details.main.temp_min) + "°F";
    foreignHigh.innerHTML = "Max Temp: " + Math.floor(details.main.temp_max) + "°F";    
  }

  const foreignPressure = document.getElementById('foreignPressure');
  foreignPressure.innerHTML = "Pressure: " + details.main.pressure + " hPa";

  const windSpeed = document.getElementById('windspeed');
  windSpeed.innerHTML = 'Wind Speed: ' + details.wind.speed + "m/s"

  const humidity = document.getElementById('humid');
  humidity.innerHTML = "Humidity: " + details.main.humidity + "%";

  const sunriseTime = sunTiming(details.timezone, details.sys.sunrise);		
  const sunrise = document.getElementById('sunrise');
  sunrise.innerHTML = 'Sunrise: ' + sunriseTime;

  const sunSetTime = sunTiming(details.timezone, details.sys.sunset);		
  const sunset = document.getElementById('sunset');
  sunset.innerHTML = 'Sunset: ' + sunSetTime;		
}

const renderCard = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  
  const weatherCard = `
    <div class="card">
    <header class="card-header">
      <div class="column has-text-centered left-col">
        <img id="foreignIcon" src="#">
        <p class="heading" id="weatherCondition"></p>
        <p class="heading" id="foreignTemp"></p>
      </div>
      <div class="column has-text-centered right-col">
        <div id="cityImage">
          <img id="cityPic">
        </div>
      </div>												
    </header>
    <div class="card-content">
      <div class="content">
        <h4 id="foreignCity" class="is-4" style="color: white;"></h4>
        <p id="foreignTime"></p>
        <div class="row">
          <div class="columns">
            <div class="column">
              <p id="foreignFeel"></p>
              <p id="foreignLow"></p>
              <p id="foreignHigh"></p>
              <p id="foreignPressure"></p>
            </div>
            <div class="column">
              <p id="windspeed"></p>
              <p id="humid"></p>
              <p id="sunrise"></p>
              <p id="sunset"></p>
            </div>
          </div>
        </div>							
      </div>
    </div>
  </div>`
  const position = 'beforeend'
  list.insertAdjacentHTML(position, weatherCard);
}

const citySearch = (function(){
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('citySearch').addEventListener('click', findCity);
  });
})();

const toggleTime = (function(){
  const unit =  document.getElementById('unit');
  unit.addEventListener("click", toggle);
})();

const purge = (function() {
  const clearAll =  document.getElementById('clearAll');
  clearAll.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
  })
})();