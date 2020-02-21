import {
  fetchLocalCityName
} from './modules/localControl.js'

const start = () => {
  fetchLocalCityName();
}
start();

function toggle() {
  const clear = document.getElementById('list');
  clear.innerHTML = '';
  const btn = document.getElementById('unit');
  if (btn.innerHTML == "Celsius") {
    btn.innerHTML = "Fahrenheit";
    unit = "imperial";    
    // toggleRender(unit);
    fetchLocalCityName(unit);
  } else {
    btn.innerHTML = "Celsius";
    unit = "metric";
    // toggleRender(unit);
    fetchLocalCityName(unit);
  }
}

const toggleTime = (function(){
  const unit =  document.getElementById('unit');
  unit.addEventListener("click", toggle);
})();