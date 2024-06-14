import React, {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {getTodos} from "../../utils/functions/LocalStorage";
import {Typography} from "@mui/material";
import FormCheckBox from "../../components/UI/FormCheckBox";
import ProgrammingNavigation from "../ProgrammingNavigation";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import BaseTemplate from "../../templates/BaseTemplate";
import Nav from "../../components/Nav";
import styles from './singleTodoItem.module.scss';

const SingleTodoViewOnly = () => {
    const [todo, setTodo] = useState({});
    const [completed, setCompleted] = useState(false);
    const [pending, setPending] = useState(false);
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
            setCompleted(foundTodo.completed || false);
            setPending(foundTodo.pending || false);
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
                            {completed ? <s>{todo.title}</s> : todo.title}
                        </Typography>
                        <hr className={styles.separatorHor}/>
                        <Typography variant="body1">
                            {completed ? <s>{todo.description}</s> : todo.description}
                        </Typography>
                        <hr className={styles.separatorHor}/>
                        <div className={styles.checkBoxGroup}>
                            <FormCheckBox
                                name="pending"
                                color="warning"
                                id={todoId.toString()}
                                label="Pending"
                                check={pending}
                            />
                            <hr className={styles.separatorVert}/>
                            <FormCheckBox
                                name="completed"
                                color="secondary"
                                id={todoId.toString()}
                                label="Completed"
                                check={completed}
                            />
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        </React.Fragment>
    );
};

export default SingleTodoViewOnly;
