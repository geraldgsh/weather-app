document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('citySearch').addEventListener('click', findCity);
});

const findCity = () => {	
   const cityInput = document.getElementById('cityInput').value;
   fetchForeignCityWeather(cityInput);
};

const fetchForeignCityWeather = (cityName) => {
   let location = cityName;
   const baseUrl = 'https://api.openweathermap.org/data/2.5';
   const key = '05f63ad5080a502f607cfa5b1219794b';
   const unit = 'metric';
   const url = `${baseUrl}/weather?q=${location}&units=${unit}&APPID=${key}`;
   fetch(url, {mode: 'cors'})
   .then((response => response.json()))
   .then(function(response) {
      getForeignWeather(response);
   })
   .catch(e => {
      alert("Invalid City")
      console.log(e);
   })
}

const getForeignWeather = (weather) => {
   renderForeignCityName(weather.name);
   renderForeignTemp(weather.main.temp);
   let icon = weather.weather[0].icon;
   renderForeignWeather(icon);
   flickrImage(weather.name);
   const clearSearch = document.getElementById('cityInput');
   clearSearch.innerHTML = "";
   renderForeignTime(weather.timezone);
   const desc = weather.weather[0].description;
   renderWeatherDescription(desc);
   renderCardContent(weather);
}

const renderForeignCityName = (foreignCityName) => {
   const foreignCity = document.getElementById('foreignCity')
   foreignCity.innerHTML = foreignCityName;
}

const renderForeignTemp = (foreignTemp) => {
   const foreigntemp = document.getElementById('foreignTemp')
   foreigntemp.innerHTML = "Local Temp: " + Math.floor(foreignTemp) + "°C";
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

const renderCardContent = (details) => {
   const foreignFeel = document.getElementById('foreignFeel');
   foreignFeel.innerHTML = "Feels Like: " + Math.floor(details.main.feels_like) + "°C";

   const foreignLow = document.getElementById('foreignLow');
   foreignLow.innerHTML = "Min Temp: " + Math.floor(details.main.temp_min) + "°C";

   const foreignHigh = document.getElementById('foreignHigh');
   foreignHigh.innerHTML = "Max Temp: " + Math.floor(details.main.temp_max) + "°C";

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