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

function initSearch() {
    let cityName = searchBar.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.weather[0]);

            if (json.cod === "404") {
                loc.innerHTML = "City not found";
                return;
            }
            if (json.cod === "400") {
                return;
            }
            loc.innerHTML = json.name;
            conditions.textContent = json.weather[0].main;
            temp.textContent = parseInt(json.main.temp) + "°C";
        });
    searchBar.value = "";
}
