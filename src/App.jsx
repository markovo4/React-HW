import Weather from "./components/Weather";
import Search from "./components/Search";
import React, {useState} from "react";
import CurrentWeather from "./components/CurrentWeather";
import TimeFilter from "./components/TimeFilter";
import BarGraph from "./components/BarGraph";

function App() {
    const [region, setRegion] = useState(null);
    const [timeFrame, setTimeFrame] = useState(['00', '23'])
    const [weatherData, setWeatherData] = useState([]);
    const handleContent = (region) => {
        setRegion(region);
    }

    const handleTimeFrame = (...time) => {
        setTimeFrame(...time)
    }

    const HandleWeatherData = (weatherParam) => {
        setWeatherData([weatherParam.forecast.forecastday[0].day.maxtemp_c, weatherParam.forecast.forecastday[0].day.mintemp_c]);
    }

    return (
        <React.Fragment>
            <div className={'container p-4'}>
                <Search onClick={handleContent}/>
                <div className={'wrapper '}>
                    <div className={'aside shadow-lg'}>
                        <CurrentWeather country={region ? region : ''}/>
                        {/*<h4 className={'forecast-title shadow-sm'}>Filter</h4>*/}
                        <BarGraph weatherData={weatherData}/>

                    </div>
                    <div className="main shadow-lg">

                        <h4 className={'forecast-title shadow-sm'}>Weather forecast for the next 24 hours</h4>
                        <TimeFilter onTimeFrame={handleTimeFrame}/>
                        <Weather country={region ? region : ''} timeFrame={timeFrame} onLoad={HandleWeatherData}/>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default App;
