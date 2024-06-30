import HomePage from "../pages/HomePage";
import routerNames from "./RouterNames";
import MyOrdersPage from "../pages/MyOrdersPage";

const routerConfig = () => {
    const pageComponents = [HomePage, MyOrdersPage];
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