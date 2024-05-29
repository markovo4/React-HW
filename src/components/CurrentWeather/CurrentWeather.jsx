import WeatherContainer from "../WeatherContainer";
import PropTypes from "prop-types";

const CurrentWeather = ({weather}) => {

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
    weather: PropTypes.object.isRequired,
}

export default CurrentWeather;
