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


const BarGraph = ({weatherData}) => {
    const options = {}

    const BarChartData = {
        labels: ['Max Temp', 'Min Temp'],
        datasets: [
            {
                data: [...weatherData],
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
    weatherData: PropTypes.array.isRequired,
}

export default BarGraph;

// data: [`${weatherData.forecast.forecastday[0].day.maxtemp_c}`, `${weatherData.forecast.forecastday[0].day.mintemp_c}`],

