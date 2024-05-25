import WeatherContainer from "../WeatherContainer";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Weather = ({country}) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4ce59e619b5d4cbfa13172625242205&q=${country}&days=1&aqi=no&alerts=no`);
                if (!response.ok) {
                    throw new Error(`Error fetching weather data: ${response.statusText}`);
                }
                const weatherData = await response.json();
                setWeather(weatherData);

            } catch (err) {
                setError(err.message);
            }
        };

        fetchWeather();
    }, [country]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }
    const weatherLocation = weather;

    return (
        <>
            {weatherLocation.forecast.forecastday[0].hour.map((weatherData, index) => (
                <WeatherContainer
                    key={index}
                    src={weatherData.condition.icon}
                    city={weatherLocation.location.name}
                    temp={weatherData.temp_c}
                    region={weatherLocation.location.region}
                    country={weatherLocation.location.country}
                    time={weatherData.time}
                />
            ))}
        </>
    );
}

Weather.propTypes = {
    country: PropTypes.string.isRequired,
}

export default Weather;
