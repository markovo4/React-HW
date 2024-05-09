import {Component} from 'react';
import {Form} from "react-bootstrap";
import {random} from 'lodash';
import PropTypes from "prop-types";

const controlId = `form-input- ${random(0, 1000)}`

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            label = null,
            value = '',
            name = '',
            type = 'text',
            placeholder = label ? label : 'Enter data',
            onChange = (e) => {
                console.log(e.target);
            },
            ...restProps
        } = this.props;

        return (
            <Form.Group className="mb-3" controlId={controlId}>
                {label && <Form.Label>{label}</Form.Label>}
                <Form.Control
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...restProps}
                />
            </Form.Group>
        )
    }
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email'])
}

export default Input;