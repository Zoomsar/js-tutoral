const form = document.querySelector('.search-form');
const input = document.querySelector('.search-bar');
const weatherInfo = document.querySelector('.weather-container');
const apiKey = 'bf7a0e8703609d94b61a6755e0b12be4';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) {
        try {
            const weatherData = await fetchWeather(city);
            displayWeather(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError('Please enter a city name');
    }
});

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error('City not found');
    }
    return await response.json();
}

function displayWeather(data) {
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
    weatherInfo.textContent = '';
    weatherInfo.style.display = 'flex';
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const emojiDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    cityDisplay.classList.add('city');
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    tempDisplay.classList.add('temp');
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add('humidity');
    descriptionDisplay.textContent = `${description}`;
    descriptionDisplay.classList.add('description');
    emojiDisplay.textContent = getEmoji(id);
    emojiDisplay.classList.add('emoji');
    
    weatherInfo.appendChild(cityDisplay);
    weatherInfo.appendChild(tempDisplay);
    weatherInfo.appendChild(humidityDisplay);
    weatherInfo.appendChild(descriptionDisplay);
    weatherInfo.appendChild(emojiDisplay);
}

function getEmoji(condition) {
    
    switch (true) {
        case condition >= 200 && condition < 300: return '⛈️';
        case condition >= 300 && condition < 500: return '🌦️';
        case condition >= 500 && condition < 600: return '🌧️';
        case condition >= 600 && condition < 700: return '❄️';
        case condition >= 700 && condition < 800: return '🌫️';
        case condition === 800: return '☀️';
        case condition > 800 && condition < 900: return '☁️';
        default: return '❓';
    }
}

function displayError(message) {
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.classList.add('error-message');
    weatherInfo.textContent = '';
    weatherInfo.style.display = 'flex';
    weatherInfo.appendChild(errorElement);
}