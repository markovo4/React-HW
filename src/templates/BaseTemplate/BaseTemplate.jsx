import PropTypes from "prop-types";

const BaseTemplate = ({className = null, children}) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
}
BaseTemplate.propTypes = {
    className: PropTypes.object,
    children: PropTypes.any.isRequired,
}

const Header = ({classNameHeader = null, children}) => {
    return (
        <header className={classNameHeader}>
            {children}
        </header>
    )
}

Header.propTypes = {
    classNameHeader: PropTypes.object,
    children: PropTypes.any.isRequired,
}


BaseTemplate.Header = Header;

export default BaseTemplate;
