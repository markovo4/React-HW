import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/PageNotFound";
import LoginPage from "../../pages/LoginPage";
import routerNames from "./RouterNames";
import SingleTodoItemEdit from "../../pages/SingleTodoItemEdit";
import TodoList from "../../pages/TodoList";
import SingleTodoItemView from "../../pages/SingleTodoViewOnly";


const routerConfig = () => {
    const pageComponents = [HomePage, PageNotFound, LoginPage, SingleTodoItemEdit, TodoList, SingleTodoItemView];
    const routeKeys = Object.keys(routerNames);

    if (pageComponents.length !== routeKeys.length) {
        console.error("The number of routes and components do not match.");
        return [];
    }

    const routerConfig = pageComponents.map((pageComponent, index) => {
        const keyName = routeKeys[index];
        return {
            path: routerNames[keyName],
            component: pageComponent,
            id: index,
        }
    })

    return routerConfig;
}

export default routerConfig;