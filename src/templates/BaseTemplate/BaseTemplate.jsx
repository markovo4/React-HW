import PropTypes from "prop-types";

const BaseTemplate = ({className = null, children}) => {
    return <main className={className}>
        {children}
    </main>
}
BaseTemplate.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default BaseTemplate;
