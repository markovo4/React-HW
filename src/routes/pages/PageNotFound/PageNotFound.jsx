import BaseTemplate from "../../../templates/BaseTemplate";
import LogoutButton from "../../../components/LogoutButton";
import Nav from "../../../components/Nav";
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