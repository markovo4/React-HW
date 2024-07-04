import PropTypes from "prop-types";
import styles from './baseTemplate.module.scss';

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

const Header = ({children}) => {
    return (
        <header className={styles.header}>
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
