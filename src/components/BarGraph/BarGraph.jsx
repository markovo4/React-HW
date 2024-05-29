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

    const options = {}

    const BarChartData = {
        labels: ['Max Temp', 'Min Temp'],
        datasets: [
            {
                data: [weather.forecast.forecastday[0].day.maxtemp_c, weather.forecast.forecastday[0].day.mintemp_c],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            }
        ]
    }

    return (
        <Bar options={options} data={BarChartData}/>
    )
}

BarGraph.propTypes = {
    weather: PropTypes.object.isRequired,
}

export default BarGraph;

