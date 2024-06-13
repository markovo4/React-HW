import BaseTemplate from "../../templates/BaseTemplate";
import ProgrammingNavigation from "../ProgrammingNavigation";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader/index.js";
import React from "react";
import Nav from "../../components/Nav/index.js";
import styles from './pageNotFound.module.scss';

const PageNotFound = () => {
    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>
            <BaseTemplate>
                <div className={styles.title}>PAGE NOT FOUND!</div>
            </BaseTemplate>
        </React.Fragment>
    )
}

export default PageNotFound;