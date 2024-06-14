import React, {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {getTodos} from "../../utils/functions/LocalStorage/index.js";
import {Typography} from "@mui/material";
import styles from './singleTodoItem.module.scss';
import FormSelect from "../../components/UI/FormSelect.jsx";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader/index.js";
import Nav from "../../components/Nav/index.js";
import ProgrammingNavigation from "../ProgrammingNavigation/index.js";
import BaseTemplate from "../../templates/BaseTemplate/index.js";

const SingleTodoItemView = () => {
    const [todo, setTodo] = useState({});
    const [status, setStatus] = useState('Not-Completed');
    const DATA_KEY = 'data';

    const {todoId} = useParams();
    const todos = getTodos(DATA_KEY);

    const todoMap = useMemo(() => {
        const map = new Map();
        todos.forEach(todo => {
            map.set(todo.itemId.toString(), todo);
        });
        return map;
    }, [todos]);

    useEffect(() => {
        const foundTodo = todoMap.get(todoId);
        if (foundTodo) {
            setTodo(foundTodo);
            setStatus(foundTodo.status || 'Not-Completed');
        }
    }, [todoId]);

    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>
            <BaseTemplate>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <Typography variant="h5">
                            {todo.title}
                        </Typography>
                        <hr className={styles.separatorHor}/>
                        <Typography variant="body1">
                            {todo.description}
                        </Typography>
                        <hr className={styles.separatorHor}/>
                        <div className={styles.checkBoxGroup}>
                            <FormSelect
                                view={true}
                                status={status}
                                id={todoId.toString()}
                            />
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        </React.Fragment>
    );
};

export default SingleTodoItemView;
