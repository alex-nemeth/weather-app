let appid = "1eb1dbe460ce3064486af8f6b092cab8";

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const loc = document.querySelector(".location");
const temp = document.querySelector(".temp");
const conditions = document.querySelector(".conditions");

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
            if ((json.name = undefined)) {
                alert("City not found");
            }
            loc.innerHTML = json.name;
            conditions.textContent = json.weather[0].main;
            temp.textContent = parseInt(json.main.temp) + "°C";
        });
    searchBar.value = "";
}

//fix undefined error
//protect api
