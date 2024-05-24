import Weather from "./components/Weather";
import './components/WeatherContainer/WeatherContainer.css';
import Search from "./components/Search";
import {useState} from "react";

function App() {
    const [region, setRegion] = useState(null);

    const handleContent = (region) => {
        setRegion(region);
    }

    return (
        <>
            <Search onClick={handleContent}/>
            <div className="container1">
                {region && <Weather country={region}/>}
            </div>
        </>
    );
}

export default App;
