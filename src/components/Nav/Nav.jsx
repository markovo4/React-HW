import BaseTemplate from "../../templates/BaseTemplate";
import {Link} from "react-router-dom";
import styles from './nav.module.scss';

const Nav = () => {
    return (
        <BaseTemplate.Header>
            <nav className={styles.navigation}>
                <Link to={'/'} className={styles.link}>Home Page</Link>
                <Link to={'/ordersList'} className={styles.link}>My Orders</Link>
            </nav>
        </BaseTemplate.Header>
    )
}

export default Nav;