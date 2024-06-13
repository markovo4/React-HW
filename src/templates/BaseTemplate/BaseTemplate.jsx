import PropTypes from "prop-types";
import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({children}) => {
    return <main className={styles.main}>
        {children}
    </main>
}
BaseTemplate.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default BaseTemplate;
