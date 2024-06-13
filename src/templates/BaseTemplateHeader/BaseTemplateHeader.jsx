import PropTypes from "prop-types";
import styles from './BaseTemplateHeader.module.scss'

const BaseTemplateHeader = ({children}) => {
    return <header className={styles.header}>
        {children}
    </header>
}
BaseTemplateHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default BaseTemplateHeader;
