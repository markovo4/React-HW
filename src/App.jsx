import Weather from "./components/Weather";
import Search from "./components/Search";
import React, {useState} from "react";
import CurrentWeather from "./components/CurrentWeather";
import TimeFilter from "./components/TimeFilter";

function App() {
    const [region, setRegion] = useState(null);
    const [timeFrame, setTimeFrame] = useState(['00', '23'])
    const handleContent = (region) => {
        setRegion(region);
    }

    const handleTimeFrame = (...time) => {
        setTimeFrame(...time)
    }


    return (
        <React.Fragment>
            <div className={'container p-4'}>
                <Search onClick={handleContent}/>
                <div className={'wrapper '}>
                    <div className={'aside shadow-lg'}>
                        <CurrentWeather country={region ? region : ''}/>
                        <h4 className={'forecast-title shadow-sm'}>Filter</h4>
                        <TimeFilter onTimeFrame={handleTimeFrame}/>
                    </div>
                    <div className="main shadow-lg">

                        <h4 className={'forecast-title shadow-sm'}>Weather forecast for the next 24 hours</h4>
                        <Weather country={region ? region : ''} timeFrame={timeFrame}/>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default App;
