const weather = document.querySelector(".js-weather");
const weatherImg = document.querySelector(".js-weatherImg");

const API_KEY = "d8585e7c330ebde1456bc83440ba8f56";
const COORDS = 'coords';

init();

function init() {  
    askForCoords();
    //loadCoords();
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access");
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        const icon = json.weather[0].icon;
        weather.innerHTML = `${temperature}°C  @ ${place}`;
        weatherImg.src = `http://openweathermap.org/img/wn/${icon}.png`;
    });
}