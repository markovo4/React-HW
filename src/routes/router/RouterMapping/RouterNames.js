const routerNames = {
    homePage: '/',
    pageNotFound: '*',
    loginPage: 'login',
    singleTodoItem: 'todos/:todoId',
    todoList: 'todos',
    singleTodoViewOnly: 'todosView/:todoId',
}

Object.freeze(routerNames);
export default routerNames;