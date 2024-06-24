import PropTypes from "prop-types";
import headerStyles from './BaseTemplateHeader.module.scss'

const BaseTemplate = ({className = null, children}) => {
    return <main className={className}>
        {children}
    </main>
}
BaseTemplate.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}

const Header = ({children}) => {
    return <header className={headerStyles.header}>
        {children}
    </header>
}
Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
BaseTemplate.Header = Header;
export default BaseTemplate;
