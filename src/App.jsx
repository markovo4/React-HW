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
                <div className={'wrapper'}>
                    <div className={'aside'}>
                        {region && <CurrentWeather country={region}/>}
                    </div>
                    <div className="main">
                        {region && <Weather country={region}/>}
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default App;
