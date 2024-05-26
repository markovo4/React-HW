import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

const WeatherContainer = ({src, city, temp, region, country, time, currentWeather}) => {

    const cardStyle = {
        width: 'auto',
        borderRadius: '30px',
        padding: '15px',
        maxHeight: '15rem',
        display: 'flex',
        flexBasis: '30%',
        flexGrow: '100',
        flexDirection: currentWeather ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: currentWeather ? 'flex-start' : 'center',
        margin: '0',

    }
    return (

        <Card style={cardStyle}>
            {currentWeather && <h4 style={{color: 'grey'}}>Current Weather in {city}</h4>}
            <Card.Img variant="top" src={src} style={{width: '5rem'}}/>
            <Card.Body style={cardStyle}>
                <Card.Title
                    style={{margin: '0'}}>{currentWeather ? `${city}, ${country}` : `${city}, ${region}, ${country}`}</Card.Title>
                <Card.Text style={{margin: '0'}}>Temperature: {temp} °C</Card.Text>
                <Card.Text style={{margin: '0'}}>Date: {time}</Card.Text>
            </Card.Body>
        </Card>
    )
}

WeatherContainer.propTypes = {
    src: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    region: PropTypes.string,
    country: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

export default WeatherContainer;