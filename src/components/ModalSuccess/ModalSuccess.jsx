import styles from './modalSuccess.module.scss';
import PropTypes from "prop-types";

const ModalSuccess = ({display}) => {

    return (
        display &&
        <div className={styles.background}>
            <div className={styles.modal}>
                CHANGES SAVED
            </div>
        </div>
    )
}

ModalSuccess.propTypes = {
    display: PropTypes.bool.isRequired,
}
export default ModalSuccess;