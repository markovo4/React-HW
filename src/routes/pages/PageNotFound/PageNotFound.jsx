import BaseTemplate from "../../../templates/BaseTemplate/index.js";
import LogoutButton from "../../../components/LogoutButton/index.js";
import Nav from "../../../components/Nav/index.js";
import styles from './pageNotFound.module.scss';

const PageNotFound = () => {
    return (
        <BaseTemplate>

            <BaseTemplate.Header>
                <Nav/>
                <LogoutButton/>
            </BaseTemplate.Header>

            <div className={styles.title}>PAGE NOT FOUND!</div>
        </BaseTemplate>
    )
}

export default PageNotFound;