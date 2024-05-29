import PropTypes from "prop-types";
import WeatherContainer from "../WeatherContainer";

const Weather = ({weather, timeFrame}) => {

    if (!weather) {
        return <div>Loading...</div>;
    }

    const weatherForecast = weather.forecast.forecastday[0].hour.reduce((acc, weatherData, index) => {
        if (weatherData.time.slice(-5, -3) >= timeFrame[0] && weatherData.time.slice(-5, -3) <= timeFrame[1]) {
            acc.push(
                <WeatherContainer
                    key={index}
                    src={weatherData.condition.icon}
                    city={weather.location.name}
                    temp={weatherData.temp_c}
                    region={weather.location.region}
                    country={weather.location.country}
                    time={weatherData.time.slice(-5)}
                    condition={weatherData.condition.text}
                    currentWeather={false}
                />
            )
        }
        return acc;
    }, [])

    return weatherForecast;
}

Weather.propTypes = {
    timeFrame: PropTypes.any.isRequired,
    weather: PropTypes.object.isRequired,
}

export default Weather;