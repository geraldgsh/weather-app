export const renderLocalCard = (localCity, localIcon) => {
  const format = {
    weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',
  };
  const today = new Date();
  const dateElement = today.toLocaleDateString('en-US', format);
  const localWeather = document.getElementById('localWeather');
  localWeather.innerHTML = `
    <div>        
      <img id='localIcon' src='https://openweathermap.org/img/wn/${localIcon}@2x.png'>
      <p id='localTemp' class='heading'></p>
      <p id='date' class='date'>${dateElement}<p>
      <p id='localCity' class='title'>${localCity}</p>
    </div>`;
};

export const localCelsius = (tempLocal) => {
  const celsiusTemp = document.getElementById('localTemp');
  celsiusTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°C`;
};

export const localFahrenheit = (tempLocal) => {
  const fahrenheitTemp = document.getElementById('localTemp');
  fahrenheitTemp.innerHTML = `Local Temp: ${Math.floor(tempLocal)}°F`;
};
