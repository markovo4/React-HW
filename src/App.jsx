import Weather from "./components/Weather";
import './components/WeatherContainer/WeatherContainer.css';

function App() {

    return (
        <>
            <div className={'container1'}>
                <Weather country={'Ukraine'}/>
                <Weather country={'Canada'}/>
                <Weather country={'Europe'}/>
                <Weather country={'USA'}/>
                <Weather country={'USA'}/>
                <Weather country={'USA'}/>
                <Weather country={'USA'}/>
                <Weather country={'USA'}/>
                <Weather country={'USA'}/>
            </div>
        </>
    )
}

export default App
