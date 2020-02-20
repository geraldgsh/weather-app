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
    renderCard(response, unit);
  })
  .catch(e => {
    alert("Invalid City")
    console.log(e);
   })
}

const getForeignWeatherIcon = (icon) => {
  let foreignLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
  return foreignLink;
}

const renderCard = (weather, unit) => {
  const weatherIcon = getForeignWeatherIcon(weather.weather[0].icon)

  const list = document.getElementById('list');
  list.innerHTML = '';
  
  const weatherCard = `
    <div class="card">
    <header class="card-header">
      <div class="column has-text-centered left-col">
        <img id="foreignIcon" src="${weatherIcon}">
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