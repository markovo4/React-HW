import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

const WeatherContainer = ({src, city, temp, region, country, time}) => {

    const cardStyle = {
        width: 'auto',
        borderRadius: '30px',
        padding: '15px',
        maxHeight: '15rem',
        display: 'flex',
        flexBasis: '30%',
        flexGrow: '100',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',

    }
    return (

        <Card style={cardStyle}>
            <Card.Img variant="top" src={src} style={{width: '5rem'}}/>
            <Card.Body style={cardStyle}>
                <Card.Title style={{margin: '0'}}>{city}, {region}, {country}</Card.Title>
                <Card.Text style={{margin: '0'}}>{temp} °C</Card.Text>
                <Card.Text style={{margin: '0'}}>{time}</Card.Text>
            </Card.Body>
        </Card>
    )
}

WeatherContainer.propTypes = {
    src: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}

export default WeatherContainer;