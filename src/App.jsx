import Weather from "./components/Weather";
import Search from "./components/Search";
import React, {useEffect, useState} from "react";
import CurrentWeather from "./components/CurrentWeather";
import TimeFilter from "./components/TimeFilter";
import BarGraph from "./components/BarGraph";
import PolarAreaGraph from "./components/PolarAreaGraph";

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
                return console.log(error)
            }

            const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?`
                + `key=4ce59e619b5d4cbfa13172625242205`
                + `&q=${region ? region : coords}`
                + `&days=1&aqi=no&alerts=no`

            try {
                const response = await fetch(weatherUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const weatherData = await response.json();

                setWeather(weatherData);
            } catch (err) {
                return console.dir(`Error fetching weather data: ${err}`)
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
        if (region) {
            setRegion(region)
        }

    }

    const handleTimeFrame = (time) => {
        setTimeFrame(time)
    }

    return (
        <React.Fragment>
            <div className={'container p-4'}>
                <Search onClick={handleContent}/>
                <div className={'wrapper '}>
                    <div className={'aside shadow-lg'}>
                        {weather && <CurrentWeather weather={weather}/>}
                        {weather && <BarGraph weather={weather}/>}
                        {weather && <PolarAreaGraph weather={weather}/>}

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

export default App;
