const api = {
    key: "0569113fba97d5cc1a9cfbc16b881262",
    baseurl: "https://api.openweathermap.org/data/2.5/"

}
var searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${weather.main.temp}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = `${weather.weather[0].main}, ${weather.weather[0].description}`;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `Humidity: ${weather.main.humidity} %`;
}

