import {useEffect} from "react";

const Weather = (props) => {
    const weatherContainer = document.getElementById('root')
    const fetchWeather = async function () {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=4ce59e619b5d4cbfa13172625242205&q=London&aqi=no');
        const weather = response.json();
        return weather;
    }
    useEffect(() => {
        fetchWeather().then((weather) => {
            const weatherIcon = document.createElement('img');
            weatherIcon.src = weather.current.condition.icon;
            weatherContainer.appendChild(weatherIcon);
            console.log()
        })
    })

}

export default Weather;