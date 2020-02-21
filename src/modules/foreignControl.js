export const findCity = (e) => {
  e.preventDefault();
  const cityInput = document.getElementById('cityInput').value;
  if(cityList.some(city => city.name === cityInput)) {
    alert("Duplicate city!")
  } else {
    checkCity(cityInput);
  }
};

export const addCityToList = (cityName) => {
  if(cityList.some(city => city.name === cityName)) {
  } else {
    id = cityList.length;
    const newCity = new City(cityName, id);
    cityList.push(newCity);
    updateLocalStorage(cityList);
    fetchForeignCityWeather(cityName, id, unit = 'metric');      
  }  
}

export const toggleRender = (unit) => {
	const cityList = JSON.parse(localStorage.getItem("cityList"))
	const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
	async function asyncForEach(array, callback) {
	  for (let index = 0; index < array.length; index++) {
	    await callback(array[index], index, array);
	  }
	}
	const init = async () => {
	  await asyncForEach(cityList, async (city) => {
	    await waitFor(900);
	    fetchForeignCityWeather(city.name, city.id, unit);
	  });
  }
  init();
}

export const fetchForeignCityWeather = (cityName, id, unit = 'metric') => {
  let location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
  const value = unit;
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, {mode: 'cors'})
  .then((response => response.json()))
  .then(function(response) {  
    renderForeignCard(response, id, unit);
  })
  .catch(e => {
    alert("Invalid City");
    console.log(e);
   })  
}

export const checkCity = (cityInput) => {
  let location = cityInput;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
  const value = 'metric';
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, {mode: 'cors'})
  .then((response => response.json()))
  .then(function(response) {
    addCityToList(response.name);
  })
  .catch(e => {
    alert("Invalid City");
    console.log(e);
  })
}

export const getForeignWeatherIcon = (icon) => {
  let foreignLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
  return foreignLink;
}

export const getForeignTemp = (temp, unit) => {
  if (unit == 'metric') {
    const mainTemp = "Local Temp: " + Math.floor(temp) + "°C";
    return mainTemp;
  } else {
    const mainTemp = "Local Temp: " + Math.floor(temp) + "°F";
    return mainTemp;
  };
}

export const getflickrImg = (foreignCityName, id) => {
  const tags = foreignCityName;
  const script = document.createElement('script');
  script.src = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=" + tags;
  document.head.appendChild(script)
  let photoID = id; 
  window.cb = function(data) {    
    console.log(data);
    console.warn(photoID);
    let ele = 'cityPic' + photoID    
    const image = document.getElementById(ele);
    image.setAttribute('src', data.items[0].media.m);
  };
};

export const getForeignTime = (foreignTiming) => {
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming/3600;
  const format = {month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'};
  const newTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleDateString("en-US", format);
  return newTime;
}

export const getForeignFeel = (feel, unit) => {
  if (unit == 'metric') {
    const feelLike = "Feels Like: " + Math.floor(feel) + "°C";
    return feelLike;
  } else {
    const feelLike = "Feels Like: " + Math.floor(feel) + "°F";    
    return feelLike;
  }
}

export const getForeignLow = (low, unit) => {
  if (unit == 'metric') {
    const tempMin = "Min Temp: " + Math.floor(low) + "°C";
    return tempMin;
  } else {
    const tempMin = "Min Temp: " + Math.floor(low) + "°F";    
    return tempMin;
  }
}

export const getForeignHigh = (high, unit) => {
  if (unit == 'metric') {
    const tempMax = "Max Temp: " + Math.floor(high) + "°C";
    return tempMax;
  } else {
    const tempMax = "Max Temp: " + Math.floor(high) + "°F";    
    return tempMax;
  }
}

export const getSunTiming = (timeZone, sunTime) => {
  const foreignTiming = timeZone;
  const date = new Date(sunTime * 1000);
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming/3600;
  const format = {hour: 'numeric', minute: 'numeric'};
  const sunnyTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString("en-US", format);
  return sunnyTime;
}

let cityList = [];
function City(name, id) {
  this.name = name;
  this.id = id;  
}

function toggle() {
  const clear = document.getElementById('list');
  clear.innerHTML = '';
  const btn = document.getElementById('unit');
  if (btn.innerHTML == "Celsius") {
    btn.innerHTML = "Fahrenheit";
    unit = "imperial";    
    toggleRender(unit);
    fetchCurrentCityName(unit);
  } else {
    btn.innerHTML = "Celsius";
    unit = "metric";
    toggleRender(unit);
    fetchLocalCityName(unit);
  }
}	

const updateLocalStorage = (arr) => {
  window.localStorage.setItem('cityList', JSON.stringify(arr));
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

(function() {  
  toggleRender();
})();