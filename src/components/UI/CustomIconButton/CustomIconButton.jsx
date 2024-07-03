import {IconButton} from "@mui/material";
import PropTypes from "prop-types";

const CustomIconButton = ({children, label, handleAction, color}) => {

    const handleClick = () => {
        handleAction()
    }
    return (
        <IconButton
            sx={{bgcolor: `${color}`}}
            aria-label={label}
            onClick={handleClick}
        >
            {children}
        </IconButton>
    )
}
CustomIconButton.propTypes = {
    children: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    handleAction: PropTypes.func.isRequired,
    color: PropTypes.any.isRequired,
}
export default CustomIconButton;
