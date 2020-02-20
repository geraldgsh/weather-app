const fetchCurrentCityName = (unit = "metric") => {
  fetch('https://ipinfo.io?token=311875147c07c2', {mode: 'cors'})
 .then(response => response.json())
 .then(function(response) {
    fetchLocalCityWeather(response.city, unit);
 })
 .catch(e => {
    localCity.innerHTML = e;
    console.log(e);
 })
};

(function() {
  fetchCurrentCityName();
})();

const fetchLocalCityWeather = (cityName, unit) => {
  let location = cityName;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';
  const key = '05f63ad5080a502f607cfa5b1219794b';
  const value = unit;
  const url = `${baseUrl}/weather?q=${location}&units=${value}&APPID=${key}`;
  fetch(url, {mode: 'cors'})
  .then((response => response.json()))
  .then(function(response) {
    renderLocalCard(response, unit);
 })
 .catch(e => {
    localCity.innerHTML = e;
    console.log(e);
 })
}

const renderLocalCard = (weather, unit) => {
  const localIcon = document.getElementById('localIcon');
  const localTemp = document.getElementById('localTemp');
  const dateElement = document.getElementById("date");
  const localCity = document.getElementById('localCity')
  
  const icon = weather.weather[0].icon;
    let localLink = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
  localIcon.setAttribute("src", localLink)

  if (unit === "metric") {			
    localTemp.innerHTML = "Local Temp: " + Math.floor(weather.main.temp) + "°C";
  } else {
    localTemp.innerHTML = "Local Temp: " + Math.floor(weather.main.temp) + "°F";
  }

  const format = {weekday:"long", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric'};
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString("en-US", format);

  localCity.innerHTML = weather.name;

}

