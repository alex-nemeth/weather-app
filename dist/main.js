(()=>{"use strict";const e=document.querySelector(".search-bar"),r=document.querySelector(".search-button"),t=document.querySelector(".location"),a=document.querySelector(".temp"),s=document.querySelector(".conditions"),n=document.querySelector(".content");r.addEventListener("click",(()=>function(){let r=e.value;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&appid=1eb1dbe460ce3064486af8f6b092cab8&units=metric`).then((e=>e.json())).then((e=>{var r;"404"!==e.cod?"400"!==e.cod&&(t.innerHTML=e.name,s.textContent=e.weather[0].main,"Clear"===(r=e.weather[0].main)?n.style.backgroundImage="url(../src/images/clear.jpg)":"Clouds"===r?n.style.backgroundImage="url(../src/images/clouds.png)":"Rain"===r||"Drizzle"===r?n.style.backgroundImage="url(../src/images/rain.jpg)":"Thunderstorm"===r?n.style.backgroundImage="url(../src/images/thunderstorm.jpg)":"Snow"===r?n.style.backgroundImage="url(../src/images/snow.jpg)":"Mist"===r?n.style.backgroundImage="url(../src/images/mist.jpg)":"Smoke"===r?n.style.backgroundImage="url(../src/images/smoke.jpg)":"Haze"===r?n.style.backgroundImage="url(../src/images/mist.jpg)":"Dust"===r?n.style.backgroundImage="url(../src/images/dust.jpg)":"Fog"===r?n.style.backgroundImage="url(../src/images/mist.jpg)":"Sand"===r?n.style.backgroundImage="url(../src/images/sand.jpg)":"Ash"===r?n.style.backgroundImage="url(../src/images/ash.jpg)":"Squall"===r?n.style.backgroundImage="url(../src/images/thunderstorm.jpg)":"Tornado"===r&&(n.style.backgroundImage="url(../src/images/tornado.jpg)"),a.textContent=parseInt(e.main.temp)+"°C"):t.innerHTML="City not found"})),e.value=""}())),e.addEventListener("keypress",(e=>{"Enter"===e.key&&(e.preventDefault,r.click())}))})();