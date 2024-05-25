import Weather from "./components/Weather";
import './components/WeatherContainer/WeatherContainer.css';
import Search from "./components/Search";
import React, {useState} from "react";

function App() {
    const [region, setRegion] = useState(null);

    const handleContent = (region) => {
        setRegion(region);
    }

    return (
        <React.Fragment>
            <div className={'container'}>
                <Search onClick={handleContent}/>
                <div className={'wrapper'}>
                    <div className={'aside'}>
                        {region && <Weather country={region}/>}
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
