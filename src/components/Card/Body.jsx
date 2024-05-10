import PropTypes from "prop-types";

const Body = ({children}) => {
    return <div className={'card-body'}>{children}</div>
}

Body.propTypes = {
    children: PropTypes.any.isRequired
}

export default Body;