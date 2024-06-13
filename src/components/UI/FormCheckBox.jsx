import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import PropTypes from "prop-types";

const FormCheckBox = ({name, color, onClick, id, label, check}) => {
    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={check} name={name} color={color} onClick={onClick} id={id.toString()}/>}
                label={label}/>
        </FormGroup>
    )
}

FormCheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    check: PropTypes.bool.isRequired,
}
export default FormCheckBox;