import BaseTemplate from "../../../templates/BaseTemplate/index.js";
import TodoList from "../../../components/TodoList/index.js";
import LogoutButton from "../../../components/LogoutButton/index.js";
import Nav from "../../../components/Nav/index.js";

const HomePage = () => {
    return (
        <BaseTemplate>

            <BaseTemplate.Header>
                <Nav/>
                <LogoutButton/>
            </BaseTemplate.Header>

            <TodoList/>
        </BaseTemplate>
    )
}

export default HomePage;