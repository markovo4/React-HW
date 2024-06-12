const routerNames = {
    homePage: '/',
    pageNotFound: '*',
    loginPage: 'login',
    singleTodoItem: 'todos/:todoId',
}

Object.freeze(routerNames);
export default routerNames;