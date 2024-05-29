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

    const options = {maintainAspectRatio: false}

    const BarChartData = {
        labels: ['Max Temp', 'Min Temp'],
        datasets: [
            {
                data: [
                    weather.forecast.forecastday[0].day.maxtemp_c,
                    weather.forecast.forecastday[0].day.mintemp_c
                ],
                backgroundColor: ['rgba(0,196,255,0.69)'],
                height: 100,
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 0,
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

