import {Button, FormGroup} from "@mui/material";
import PropTypes from "prop-types";

const FormButton = ({type, color, variant, onClick, id, text, icon}) => {
    const handleClick = (e) => {
        if (onClick) {
            onClick(e.target.id);
        }
    }
    return (
        <FormGroup>
            <Button
                type={type}
                color={color}
                variant={variant}
                id={id}
                onClick={handleClick}
            >{text || icon}</Button>
        </FormGroup>
    )
}

FormButton.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.any,
    icon: PropTypes.any,

}

export default FormButton;