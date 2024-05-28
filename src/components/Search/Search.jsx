import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from "react";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

const Search = ({onClick}) => {

    const [region, setRegion] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onClick(region)
        setRegion('')
    }

    const handleChange = (e) => {
        setRegion(e.target.value)
    }

    const searchStyle = {
        border: '2px solid rgba(0, 23, 91, 0.29)',
    }
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-1">
                <Button className={'custom-button'} type={'submit'} style={searchStyle}>
                    Search for a Weather forecast
                </Button>
                <Form.Control
                    style={searchStyle}
                    onChange={handleChange}
                    value={region}
                />
            </InputGroup>
        </Form>
    )
}

Search.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Search;