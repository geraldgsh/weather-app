export const renderForeignCard = (description, foreignIcon, foreignPressure,
  humidity, windSpeed, timezone, name, id) => {
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = timezone / 3600;
  const format = {
    month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
  };
  const foreignTime = new Date(utcTime + (3600000 * timeOffset)).toLocaleDateString('en-US', format);
  const list = document.getElementById('list');
  const item = `
    <div class='card'>
      <header class='card-header'>
        <div class='column has-text-centered left-col'>
          <img id='foreignIcon' src='https://openweathermap.org/img/wn/${foreignIcon}@2x.png'>
          <p class='heading' id='weatherCondition'>${description}</p>
          <p class='heading' id='foreignTemp${id}'></p>
        </div>
        <div class='column has-text-centered right-col'>
          <div id='cityImage'>
            <img id='cityPic${id}'>
          </div>
        </div>
      </header>
      <div class='card-content'>
        <div class='content'>
          <h4 id='foreignCity' class='is-4' style='color: white;'>${name}</h4>
          <p id='foreignTime'>${foreignTime}</p>
          <div class='row'>
            <div class='columns'>
              <div class='column'>
                <p id='foreignFeel${id}'></p>
                <p id='foreignLow${id}'></p>
                <p id='foreignHigh${id}'></p>
                <p id='foreignPressure'>Pressure: ${foreignPressure}hPa</p>
              </div>
              <div class='column'>
                <p id='windSpeed'>Wind Speed: ${windSpeed}m/s</p>
                <p id='humidity'>Humidity: ${humidity}%</p>
                <p id='sunrise${id}'></p>
                <p id='sunset${id}'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
};

export const foreignCelsiusTemp = (mainTemp, id) => {
  const ele = `foreignTemp${id}`;
  const foreignTemp = document.getElementById(ele);
  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°C`;
};

export const foreignFahrenheitTemp = (mainTemp, id) => {
  const ele = `foreignTemp${id}`;
  const foreignTemp = document.getElementById(ele);
  foreignTemp.innerHTML = `Local Temp: ${Math.floor(mainTemp)}°F`;
};

export const foreignCelsiusFeel = (feel, id) => {
  const ele = `foreignFeel${id}`;
  const foreignFeel = document.getElementById(ele);
  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°C`;
};

export const foreignFahrenheitFeel = (feel, id) => {
  const ele = `foreignFeel${id}`;
  const foreignFeel = document.getElementById(ele);
  foreignFeel.innerHTML = `Feels Like: ${Math.floor(feel)}°F`;
};

export const foreignCelsiusMin = (min, id) => {
  const ele = `foreignLow${id}`;
  const foreignLow = document.getElementById(ele);
  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°C`;
};

export const foreignFahrenheitMin = (min, id) => {
  const ele = `foreignLow${id}`;
  const foreignLow = document.getElementById(ele);
  foreignLow.innerHTML = `Min Temp: ${Math.floor(min)}°F`;
};

export const foreignCelsiusMax = (max, id) => {
  const ele = `foreignHigh${id}`;
  const foreignHigh = document.getElementById(ele);
  foreignHigh.innerHTML = `Max Temp: ${Math.floor(max)}°C`;
};

export const foreignFahrenheitMax = (max, id) => {
  const ele = `foreignHigh${id}`;
  const foreignLow = document.getElementById(ele);
  foreignLow.innerHTML = `Max Temp: ${Math.floor(max)}°F`;
};

export const getSunrise = (timezone, sunrise, id) => {
  const foreignTiming = timezone;
  const date = new Date(sunrise * 1000);
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming / 3600;
  const format = { hour: 'numeric', minute: 'numeric' };
  const ele = `sunrise${id}`;
  const sunriseTime = document.getElementById(ele);
  sunriseTime.innerHTML = `Sunrise: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;
};

export const getSunset = (timezone, sunset, id) => {
  const foreignTiming = timezone;
  const date = new Date(sunset * 1000);
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const timeOffset = foreignTiming / 3600;
  const format = { hour: 'numeric', minute: 'numeric' };
  const ele = `sunset${id}`;
  const sunsetTime = document.getElementById(ele);
  sunsetTime.innerHTML = `Sunset: ${new Date(utcTime + (3600000 * timeOffset)).toLocaleTimeString('en-US', format)}`;
};

export const getflickrImg = (foreignCityName, id) => {
  const tags = foreignCityName;
  const script = document.createElement('script');
  script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=${tags}`;
  document.head.appendChild(script);
  const photoID = id;
  window.cb = function cb(data) {
    const ele = `cityPic${photoID}`;
    const image = document.getElementById(ele);
    image.setAttribute('src', data.items[0].media.m);
  };
};
