import {useEffect, useState} from "react";
import WeatherContainer from "../WeatherContainer";
import PropTypes from "prop-types";

const CurrentWeather = ({country}) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {

            const position = await getPosition();
            const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
            const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?`
                + `key=4ce59e619b5d4cbfa13172625242205`
                + `&q=${country ? country : coords}`
                + `&days=1&aqi=no&alerts=no`

            try {
                const response = await fetch(weatherUrl);
                const weatherData = await response.json();
                setWeather(weatherData);
            } catch (err) {
                throw new Error(`Error fetching weather data: ${err}`)
            }
        }

        fetchWeather();
    }, [country]);

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    if (!weather) {
        return <div>Loading...</div>;
    }
    return (

        <WeatherContainer country={weather.location.country}
                          temp={weather.current.temp_c}
                          src={weather.current.condition.icon}
                          city={weather.location.name}
                          currentWeather={true}
                          time={weather.current.last_updated.slice(-5)}
                          condition={weather.current.condition.text}
        />
    )
}

CurrentWeather.propTypes = {
    country: PropTypes.string.isRequired,
}

export default CurrentWeather;
