import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";

const TimeFilter = ({onTimeFrame}) => {
    const [from, setFrom] = useState('00');
    const [to, setTo] = useState('23');

    const handleChange = (e) => {
        if (e.target.name === 'from') {
            setFrom(e.target.value);
        } else {
            setTo(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onTimeFrame([from, to])
        setFrom('00')
        setTo('23')
    }

    const searchStyle = {
        border: '1px solid rgba(0, 23, 91, 0.2)',
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <Button
                    className="my-custom-button"
                    type={'submit'}
                >Time Frame</Button>
                <Form.Control
                    style={searchStyle}
                    name={'from'}
                    aria-label="First name"
                    placeholder={'From:'}
                    onChange={handleChange}
                    value={from}
                    maxLength={2}
                />
                <Form.Control
                    style={searchStyle}
                    name={'to'}
                    aria-label="Last name"
                    placeholder={'to:'}
                    onChange={handleChange}
                    value={to}
                    maxLength={2}

                />
            </InputGroup>
        </Form>
    )
}

TimeFilter.propTypes = {
    onTimeFrame: PropTypes.func.isRequired
}

export default TimeFilter;