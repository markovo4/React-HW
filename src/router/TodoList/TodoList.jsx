import React, {useEffect, useState} from "react";
import {getTodos} from "../../utils/functions/LocalStorage";
import TodoItem from "../../components/TodoItem";
import styledList from './list.module.scss';
import styles from "../../components/TodoList/todoList.module.scss";
import ProgrammingNavigation from "../ProgrammingNavigation";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import BaseTemplate from "../../templates/BaseTemplate";
import Nav from "../../components/Nav/Nav";
import {cloneDeep, isEmpty} from 'lodash';
import {Typography} from "@mui/material";

const TodoList = () => {
    const [todoList, setTodoList] = useState(getTodos() || []);

    useEffect(() => {
        const listOfTodos = cloneDeep(todoList);
        setTodoList(listOfTodos.reverse())
    }, [])

    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>

            <BaseTemplate>
                {isEmpty(todoList) ? (
                    <Typography variant="h1" className={styledList.title}>
                        <b className={styledList.bold}>No ToDos were added yet!</b>
                    </Typography>
                ) : (
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
                )}
            </BaseTemplate>
        </React.Fragment>
    );
};

export default TodoList;
