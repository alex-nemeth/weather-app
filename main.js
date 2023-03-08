// API
// 1eb1dbe460ce3064486af8f6b092cab8

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let appid = "1eb1dbe460ce3064486af8f6b092cab8";
let cityName = "London";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=metric`;
let conditions;
let temp;
let humidity;
let windSpeed;
let uvIndex;

fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log("Location: " + json.name);
        console.log("Conditions: " + json.weather[0].main);
        console.log("Temperature: " + parseInt(json.main.temp) + "°C");
    });
