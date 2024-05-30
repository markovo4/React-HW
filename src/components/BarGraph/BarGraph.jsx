import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import PropTypes from "prop-types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarGraph = ({weather}) => {

    if (!weather) {
        return <div>Loading...</div>;
    }

    const options = {
        maintainAspectRatio: false,

    }

    const BarChartData = {
        labels: ['Max Temp', 'Feels Like', 'Min Temp'],
        datasets: [
            {
                data: [
                    weather.forecast.forecastday[0].day.maxtemp_c,
                    weather.current.feelslike_c,
                    weather.forecast.forecastday[0].day.mintemp_c,
                ],
                label: "Temp",
                backgroundColor: ['rgba(0,196,255,0.69)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                hoverBackgroundColor: "rgba(0,255,233,0.4)",
                hoverBorderColor: "rgb(126,241,228)",
                borderWidth: 2,
            }
        ]
    }

    return (
        <div className={'chart-container'}>
            <Bar options={options} data={BarChartData}/>
        </div>
    )
}

BarGraph.propTypes = {
    weather: PropTypes.object.isRequired,
}

export default BarGraph;

