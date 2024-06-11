import {FormControl, FormGroup, Input, InputLabel} from "@mui/material";
import PropTypes from "prop-types";

const FormInput = ({onChange, value, touched, error, name, id, type, label}) => {
    return (
        <FormGroup>
            <FormControl>
                <InputLabel htmlFor="login">{label}</InputLabel>
                <Input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={'off'}
                    onChange={onChange}
                    value={value}
                />
                {touched && error ? (
                    <div>{error}</div>
                ) : null}
            </FormControl>
        </FormGroup>
    )
}

FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    touched: PropTypes.bool,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
}
export default FormInput;