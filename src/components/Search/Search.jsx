import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from "react";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

const Search = ({onClick}) => {

    const [region, setRegion] = useState('Ukraine');
    const handleSubmit = (e) => {
        e.preventDefault();
        onClick(region)
        setRegion('')
    }

    const handleChange = (e) => {
        setRegion(e.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-1">
                <Button variant={"secondary"} type={'submit'}>
                    Search for a Weather forecast
                </Button>
                <Form.Control
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