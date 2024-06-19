import BaseTemplate from "../../templates/BaseTemplate";
import TodoList from "../../components/TodoList";
import React from "react";
import ProgrammingNavigation from "../ProgrammingNavigation";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import Nav from "../../components/Nav/index.js";

const HomePage = () => {
    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>
            <BaseTemplate>
                <TodoList/>
            </BaseTemplate>
        </React.Fragment>
    )
}

export default HomePage;