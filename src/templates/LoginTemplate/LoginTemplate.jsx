import PropTypes from "prop-types";

const LoginTemplate = ({className = null, children}) => {
    return <main className={className}>
        {children}
    </main>
}
LoginTemplate.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default LoginTemplate;
