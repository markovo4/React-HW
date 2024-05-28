import WeatherContainer from "../WeatherContainer";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Weather = ({country, timeFrame}) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchWeather = async () => {

            // This coords method requires further refactoring
            let coords;
            try {
                const position = await getPosition();
                coords = `${position.coords.latitude}, ${position.coords.longitude}`;
            } catch (error) {
                coords = 'Ukraine'
            }
            //

            const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?`
                + `key=4ce59e619b5d4cbfa13172625242205`
                + `&q=${country ? country : coords}`
                + `&days=1&aqi=no&alerts=no`

            try {
                const response = await fetch(weatherUrl);
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

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }
    const weatherLocation = weather;

    return (
        <>
            {weatherLocation.forecast.forecastday[0].hour
                .filter(weatherData => weatherData.time.slice(-5, -3) >= timeFrame[0] && weatherData.time.slice(-5, -3) <= timeFrame[1])
                .map((weatherData, index) => (
                    <WeatherContainer
                        key={index}
                        src={weatherData.condition.icon}
                        city={weatherLocation.location.name}
                        temp={weatherData.temp_c}
                        region={weatherLocation.location.region}
                        country={weatherLocation.location.country}
                        time={weatherData.time.slice(-5)}
                        condition={weatherData.condition.text}
                        currentWeather={false}
                    />
                ))}

        </>
    );
}

Weather.propTypes = {
    country: PropTypes.string.isRequired,
    timeFrame: PropTypes.any.isRequired
}

export default Weather;
