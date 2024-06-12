import HomePage from "../HomePage";
import PageNotFound from "../PageNotFound";
import LoginPage from "../LoginPage";
import routerNames from "./RouterNames.js";
import SingleTodoItem from "../SingleTodoItem";


const routerConfig = () => {
    const pageComponents = [HomePage, PageNotFound, LoginPage, SingleTodoItem];
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

    return routerConfig
}

export default routerConfig;