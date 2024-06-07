import routerNames from "./RouterNames.js";
import HomePage from "../HomePage";
import SingleNote from "../SingleNote";
import PageNoteFound from "../PageNotFound";

const routerConfig = () => {
    const pageComponents = [HomePage, SingleNote, PageNoteFound];
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
        };
    });

    return routerConfig;
}

export default routerConfig;
