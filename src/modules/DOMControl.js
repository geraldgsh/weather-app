export const renderLocalCard = (weather, unit) => {
  const localIcon = getLocalIcon(weather); 
  const localTemp = getLocalTemp(weather, unit);
  const dateElement = getDateElement();
  const localCity = weather.name  
  const localWeather = document.getElementById('localWeather');
  localWeather.innerHTML = `
    <div>
      <img id="localIcon" src="${localIcon}">
      <p id="localTemp" class="heading">${localTemp}</p>
      <p id="date" class="date">${dateElement}<p>
      <p id="localCity" class="title">${localCity}</p>
    </div>`
}

export const renderForeignCard = (weather, id, unit) => {
  const foreignweatherIcon = getForeignWeatherIcon(weather.weather[0].icon);
  const weatherDesc = weather.weather[0].description;
  const foreignTemp = getForeignTemp(weather.main.temp, unit);
  getflickrImg(weather.name, id);
  console.log(id);
  const foreignTime = getForeignTime(weather.timezone);
  const foreignFeel = getForeignFeel(weather.main.feels_like, unit)
  const foreignLow = getForeignLow(weather.main.temp_min, unit)
  const foreignHigh = getForeignHigh(weather.main.temp_max, unit)
  const foreignPressure = "Pressure: " + weather.main.pressure + " hPa"; 
  const windSpeed = 'Wind Speed: ' + weather.wind.speed + "m/s";
  const humidity = "Humidity: " + weather.main.humidity + "%";
  const sunriseTime = getSunTiming(weather.timezone, weather.sys.sunrise);		
  const sunrise = 'Sunrise: ' + sunriseTime;
  const sunSetTime = getSunTiming(weather.timezone, weather.sys.sunset);		
  const sunset = 'Sunset: ' + sunSetTime;	

  const list = document.getElementById('list');

  const item = `
    <div class="card">
      <header class="card-header">
        <div class="column has-text-centered left-col">
          <img id="foreignIcon" src="${foreignweatherIcon}">
          <p class="heading" id="weatherCondition">${weatherDesc}</p>
          <p class="heading" id="foreignTemp">${foreignTemp}</p>
        </div>
        <div class="column has-text-centered right-col">
          <div id="cityImage">
            <img id="cityPic${id}">
          </div>
        </div>												
      </header>
      <div class="card-content">
        <div class="content">
          <h4 id="foreignCity" class="is-4" style="color: white;">${weather.name}</h4>
          <p id="foreignTime">${foreignTime}</p>
          <div class="row">
            <div class="columns">
              <div class="column">
                <p id="foreignFeel">${foreignFeel}</p>
                <p id="foreignLow">${foreignLow}</p>
                <p id="foreignHigh">${foreignHigh}</p>
                <p id="foreignPressure">${foreignPressure}</p>
              </div>
              <div class="column">
                <p id="windSpeed">${windSpeed}</p>
                <p id="humidity">${humidity}</p>
                <p id="sunrise">${sunrise}</p>
                <p id="sunset">${sunset}</p>
              </div>
            </div>
          </div>							
        </div>
      </div>
    </div>`
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
}