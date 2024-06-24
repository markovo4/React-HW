import {Link} from "react-router-dom";
import BaseTemplate from "../../templates/BaseTemplate";
import styles from './nav.module.scss';

const Nav = () => {

    return (
        <BaseTemplate.Header>
            <nav className={styles.navigation}>
                <Link className={styles.link} to="/">Home Page</Link>
                <Link className={styles.link} to="/todos">Todos</Link>
            </nav>
        </BaseTemplate.Header>
    );
};

export default Nav;
