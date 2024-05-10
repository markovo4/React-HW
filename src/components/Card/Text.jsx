import PropTypes from "prop-types";

const Text = ({children}) => {
    return <p className={'card-text'}>{children}</p>
}

Text.propTypes = {
    children: PropTypes.any.isRequired
}

export default Text;