import { appid, bgAppid } from "./appid.js";

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const loc = document.querySelector(".location");
const temp = document.querySelector(".temp");
const conditions = document.querySelector(".conditions");
const content = document.querySelector(".content");

searchButton.addEventListener("click", () => initSearch());
searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault;
        searchButton.click();
    }
});

function conditionsBackground(weatherCondition) {
    if (weatherCondition === "Clear") {
        content.style.backgroundImage = `url(../images/clear.jpg)`;
    } else if (weatherCondition === "Clouds") {
        content.style.backgroundImage = "url(../images/clouds.png)";
    } else if (weatherCondition === "Rain") {
        content.style.backgroundImage = "url(../images/rain.jpg)";
    } else if (weatherCondition === "Drizzle") {
        content.style.backgroundImage = "url(../images/rain.jpg)";
    } else if (weatherCondition === "Thunderstorm") {
        content.style.backgroundImage = "url(../images/thunderstorm.jpg)";
    } else if (weatherCondition === "Snow") {
        content.style.backgroundImage = "url(../images/snow.jpg)";
    } else if (weatherCondition === "Mist") {
        content.style.backgroundImage = "url(../images/mist.jpg)";
    } else if (weatherCondition === "Smoke") {
        content.style.backgroundImage = "url(../images/smoke.jpg)";
    } else if (weatherCondition === "Haze") {
        content.style.backgroundImage = "url(../images/mist.jpg)";
    } else if (weatherCondition === "Dust") {
        content.style.backgroundImage = "url(../images/dust.jpg)";
    } else if (weatherCondition === "Fog") {
        content.style.backgroundImage = "url(../images/mist.jpg)";
    } else if (weatherCondition === "Sand") {
        content.style.backgroundImage = "url(../images/sand.jpg)";
    } else if (weatherCondition === "Ash") {
        content.style.backgroundImage = "url(../images/ash.jpg)";
    } else if (weatherCondition === "Squall") {
        content.style.backgroundImage = "url(../images/thunderstorm.jpg)";
    } else if (weatherCondition === "Tornado") {
        content.style.backgroundImage = "url(../images/tornado.jpg)";
    }
}

function initSearch() {
    let cityName = searchBar.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            if (json.cod === "404") {
                loc.innerHTML = "City not found";
                return;
            }
            if (json.cod === "400") {
                return;
            }
            loc.innerHTML = json.name;
            conditions.textContent = json.weather[0].main;
            conditionsBackground(json.weather[0].main);
            temp.textContent = parseInt(json.main.temp) + "°C";
        });
    searchBar.value = "";
}
