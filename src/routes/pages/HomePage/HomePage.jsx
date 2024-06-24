import BaseTemplate from "../../../templates/BaseTemplate";
import TodoList from "../../../components/TodoList";
import LogoutButton from "../../../components/LogoutButton";
import Nav from "../../../components/Nav";

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