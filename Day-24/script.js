const searchBtn = document.getElementById('search-btn');
const searchInp = document.getElementById('city-input');

searchBtn.addEventListener('click', () => {
    const city = searchInp.value;
    getWeatherData(city);
});

searchInp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const city = searchInp.value;
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiKey = '4761f9e0e91ab33c14835a73bd34f599'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateUI(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });

    fetch(forecastUrl)
        .then(res => res.json())
        .then(forecastData => {
            console.log(forecastData);
            displayForecast(forecastData);
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

function updateUI(data) {
    if (data.cod !== 200) {
        alert('City not found!');
        return;
    }

    const city = data.name;
    const temp = data.main.temp;
    const condition = data.weather[0].main;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;

    document.querySelector('.city-name').textContent = city;
    document.getElementById('temp').textContent = temp;
    document.getElementById('condition').textContent = condition;
    document.getElementById('weather-icon').src = icon;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('wind-speed').textContent = windSpeed;
    document.getElementById('max-temp').textContent = maxTemp;
    document.getElementById('min-temp').textContent = minTemp;

    updateWeatherStyle(condition);
}

function displayForecast(forecastData) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = '';
    for (let i = 0; i < forecastData.list.length; i += 8) { 
        const dayData = forecastData.list[i];
        const date = new Date(dayData.dt_txt);
        const temperature = Math.round(dayData.main.temp);
        const condition = dayData.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`;

        const forecastDay = `
            <div class="forecast-day">
                <h3>${date.toDateString()}</h3>
                <img src="${icon}" alt="${condition}">
                <p>${temperature}°C</p>
                <p>${condition}</p>
            </div>
        `;

        forecastContainer.innerHTML += forecastDay;
    }
}

function updateWeatherStyle(weather) {
    const container = document.querySelector('.weather-container');
    container.classList.remove('sunny', 'rainy', 'cloudy', 'snow', 'storm', 'mist');

    switch (weather) {
        case 'Clear':
            container.classList.add('sunny');
            break;
        case 'Rain':
            container.classList.add('rainy');
            break;
        case 'Clouds':
            container.classList.add('cloudy');
            break;
        case 'Snow':
            container.classList.add('snow');
            break;
        case 'Thunderstorm':
            container.classList.add('storm');
            break;
        case 'Mist':
        case 'Fog':
        case 'Haze':
            container.classList.add('mist');
            break;
        default:
            container.classList.add('sunny'); 
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    preloadImages([
        'sunnyWeather.jpg',
        'rainyWeather.jpg',
        'cloudyWeather.jpg',
        'snowWeather.jpg',
        'stormWeather.jpg',
        'mistWeather.jpg'
    ]);

    getWeatherData('Vadodara');
});

function preloadImages(images) {
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}