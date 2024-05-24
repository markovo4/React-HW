import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

const WeatherContainer = ({src, city, temp, region, country}) => {

    const cardStyle = {
        width: '20rem',
        borderRadius: '30px',
        padding: '15px',
        minHeight: '15rem',
        display: 'flex',
        flexBasis: '30%',
        flexGrow: '100',
    }
    return (

        <Card style={cardStyle}>
            <Card.Img variant="top" src={src} style={{width: '5rem'}}/>
            <Card.Body>
                <Card.Title>{city}, {region}, {country}</Card.Title>
                <Card.Text>{temp} °C</Card.Text>
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