import HomePage from "../../pages/HomePage/index.js";
import PageNotFound from "../../pages/PageNotFound/index.js";
import LoginPage from "../../pages/LoginPage/index.js";
import routerNames from "./RouterNames.js";
import SingleTodoItemEdit from "../../pages/SingleTodoItemEdit/index.js";
import TodoList from "../../pages/TodoList/index.js";
import SingleTodoItemView from "../../pages/SingleTodoViewOnly/index.js";


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