import {PolarArea} from "react-chartjs-2";
import {ArcElement, Chart, Legend, RadialLinearScale, Title, Tooltip} from "chart.js";
import PropTypes from "prop-types";

Chart.register(RadialLinearScale, Legend, ArcElement, Title, Tooltip)
const PolarAreaGraph = ({weather}) => {

    const labels = ['Wind Speed km/h', 'Humidity %', 'Atmospheric Pressure inHg'];
    console.log(weather)
    const data = {
        labels: labels,
        legend: 'Weather stats',
        datasets: [
            {
                data: [
                    weather.current.wind_kph,
                    weather.current.humidity,
                    weather.current.pressure_in,
                ],
                backgroundColor: [
                    "rgba(169,255,217,0.5)",
                    "rgba(0,178,255,0.5)",
                    "rgba(231,179,179,0.5)",
                ],
                borderColor: "rgba(255,255,255,0.63)",
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                grid: {
                    circular: true,
                    color: "rgba(107,133,131,0.89)"
                },
                angleLines: {
                    display: true,
                    color: "rgba(107,133,131,0.89)",
                    lineWidth: 1
                },

                ticks: {
                    backdropColor: 'transparent',
                }

            }
        }

    }

    return (
        <PolarArea data={data} options={options}/>
    )
}

PolarAreaGraph.propTypes = {
    weather: PropTypes.object.isRequired,
}
export default PolarAreaGraph;