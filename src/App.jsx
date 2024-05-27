import Weather from "./components/Weather";
import './components/WeatherContainer/WeatherContainer.css';
import Search from "./components/Search";
import React, {useState} from "react";
import CurrentWeather from "./components/CurrentWeather";

function App() {
    const [region, setRegion] = useState(null);

    const handleContent = (region) => {
        setRegion(region);
    }

    return (
        <React.Fragment>
            <div className={'container p-4'}>
                <Search onClick={handleContent}/>
                <div className={'wrapper '}>
                    <div className={'aside shadow-lg'}>
                        <CurrentWeather country={region ? region : ''}/>
                    </div>
                    <div className="main shadow-lg">

                        <h4 className={'forecast-title shadow-sm'}>Weather forecast for the next 24 hours</h4>
                        <Weather country={region ? region : ''}/>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default App;
