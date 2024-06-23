import {useEffect, useState} from "react";
import {getTodos} from "../../../utils/functions/LocalStorage/index.js";
import TodoItem from "../../../components/TodoItem/index.js";
import styledList from './list.module.scss';
import styles from "../../../components/TodoList/todoList.module.scss";
import LogoutButton from "../../../components/LogoutButton/index.js";
import BaseTemplate from "../../../templates/BaseTemplate/index.js";
import Nav from "../../../components/Nav/Nav.jsx";
import {cloneDeep, isEmpty} from 'lodash';
import {Typography} from "@mui/material";

const TodoList = () => {
    const [todoList, setTodoList] = useState(getTodos() || []);

    useEffect(() => {
        const listOfTodos = cloneDeep(todoList);
        setTodoList(listOfTodos.reverse())
    }, [])

    const todosAbsent = () => {
        return (
            <Typography variant="h2" className={styledList.title}>
                <b className={styledList.bold}>No ToDos!</b>
            </Typography>
        )
    }

    const todosPresent = () => {
        return (
            <div className={styledList.container}>
                <div className={styles.wrapper}>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.itemId}
                            title={todo.title}
                            description={todo.description}
                            id={todo.itemId}
                            view={true}
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <BaseTemplate>

            <BaseTemplate.Header>
                <Nav/>
                <LogoutButton/>
            </BaseTemplate.Header>

            {isEmpty(todoList) ? todosAbsent() : todosPresent()}

        </BaseTemplate>
    );
};

export default TodoList;
