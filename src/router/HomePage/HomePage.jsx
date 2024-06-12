import BaseTemplate from "../../templates/BaseTemplate";
import TodoList from "../../components/TodoList";
// import ProgrammingNavigation from "../ProgrammingNavigation";

const HomePage = () => {
    return (
        <BaseTemplate>
            {/*<ProgrammingNavigation/>*/}
            <TodoList/>
        </BaseTemplate>
    )
}

export default HomePage;