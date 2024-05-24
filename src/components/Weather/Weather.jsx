import WeatherContainer from "../WeatherContainer";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Weather = ({country}) => {

    const [weather, setWeather] = useState(null);
    useEffect(() => {
        fetchWeather();
    }, [])

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4ce59e619b5d4cbfa13172625242205&q=${country}&aqi=no`);
            const weather = await response.json();
            setWeather(weather);
            console.log(weather);
        } catch (err) {
            throw new Error(`Error fetching weather data: ${err}`)
        }
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <WeatherContainer
            src={weather.current.condition.icon}
            city={weather.location.name}
            temp={weather.current.temp_c}
            region={weather.location.region}
            country={weather.location.country}
        />
    );
}

Weather.propTypes = {
    country: PropTypes.string.isRequired,
}

export default Weather;