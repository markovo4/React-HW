import Weather from "./components/Weather";
import Search from "./components/Search";
import React, {useEffect, useState} from "react";
import CurrentWeather from "./components/CurrentWeather";
import TimeFilter from "./components/TimeFilter";
import BarGraph from "./components/BarGraph";

function App() {
    const [region, setRegion] = useState(null);
    const [timeFrame, setTimeFrame] = useState(['00', '23'])
    const [weather, setWeather] = useState(null);


    useEffect(() => {
        const fetchWeather = async () => {

            let coords = 'Ukraine';
            try {
                const position = await getPosition();
                coords = `${position.coords.latitude}, ${position.coords.longitude}`;
            } catch (error) {
                console.log(error)
            }

            const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?`
                + `key=4ce59e619b5d4cbfa13172625242205`
                + `&q=${region ? region : coords}`
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
    }, [region]);

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    const handleContent = (region) => {
        setRegion(region);
        console.log(weather);
    }

    const handleTimeFrame = (...time) => {
        setTimeFrame(...time)
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <div className={'container p-4'}>
                <Search onClick={handleContent}/>
                <div className={'wrapper '}>
                    <div className={'aside shadow-lg'}>
                        {weather && <CurrentWeather weather={weather}/>}
                        {/*<h4 className={'forecast-title shadow-sm'}>Filter</h4>*/}
                        {weather && <BarGraph weather={weather}/>}

                    </div>
                    <div className="main shadow-lg">

                        <h4 className={'forecast-title shadow-sm'}>Weather forecast for the next 24 hours</h4>
                        <TimeFilter onTimeFrame={handleTimeFrame}/>
                        {weather && <Weather weather={weather} timeFrame={timeFrame}/>}
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

// onLoad={HandleWeatherData}
export default App;
