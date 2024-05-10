import PropTypes from "prop-types";

const Body = ({children}) => {
    return (
        <div className={'modal-body'}>{children}</div>
    )
}

export default Body;

Body.propTypes = {
    children: PropTypes.any.isRequired,
}