import React, {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {Button, FormGroup, Typography} from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import Nav from "../../components/Nav";
import ProgrammingNavigation from "../ProgrammingNavigation";
import ModalSuccess from "../../components/ModalSuccess";
import FormCheckBox from "../../components/UI/FormCheckBox";
import styles from './singleTodoItem.module.scss';
import {getTodos, setTodos} from "../../utils/functions/LocalStorage";

const SingleTodoItem = () => {
    const navigate = useNavigate();
    const {todoId} = useParams();
    const DATA_KEY = 'data';

    const todos = getTodos(DATA_KEY);
    const todoMap = useMemo(() => {
        return new Map(todos.map(todo => [todo.itemId.toString(), todo]));
    }, [todos]);

    const [todo, setTodo] = useState(() => todoMap.get(todoId) || {});
    const [completed, setCompleted] = useState(todo.completed || false);
    const [pending, setPending] = useState(todo.pending || false);
    const [edit, setEdit] = useState(false);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const foundTodo = todoMap.get(todoId);
        if (foundTodo) {
            setTodo(foundTodo);
            setCompleted(foundTodo.completed);
            setPending(foundTodo.pending);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            title: todo.title || '',
            description: todo.description || '',
        },
        onSubmit: (values) => {
            if (!values.title.trim() || !values.description.trim()) return;

            const updatedTodos = todos.map(todo =>
                todo.itemId.toString() === todoId
                    ? {...todo, title: values.title, description: values.description}
                    : todo
            );
            setTodos(DATA_KEY, updatedTodos);
            setTodo(prevTodo => ({...prevTodo, title: values.title, description: values.description}));
            handleSave();
        }
    });

    const handleSave = () => {
        setDisplay(true);
        const modalTimeoutId = setTimeout(() => {
            setDisplay(false);
            setEdit(false);
            clearTimeout(modalTimeoutId);
        }, 1500);
    };

    const handleToggle = (e) => {
        const {name} = e.target;
        const updatedTodos = todos.map(todo =>
            todo.itemId.toString() === todoId
                ? {...todo, [name]: name === 'completed' ? !completed : !pending}
                : todo
        );
        setTodos(DATA_KEY, updatedTodos);
        if (name === 'completed') {
            setCompleted(!completed);
        } else {
            setPending(!pending);
        }
    };

    const handleEdit = () => {
        setEdit(prevEdit => !prevEdit);
    };

    const handleDelete = () => {
        const filteredTodos = todos.filter(todo => todo.itemId.toString() !== todoId);
        setTodos(DATA_KEY, filteredTodos);
        navigate('/');
    };

    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>
            <BaseTemplate>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        {edit ? (
                            <form className={styles.form} onSubmit={formik.handleSubmit}>
                                <Typography variant="h5">Title:</Typography>
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    name="title"
                                    id="title"
                                    type="text"
                                    className={styles.title}
                                />
                                <Typography variant="h5">Description:</Typography>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Description of To-Do..."
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    className={styles.description}
                                />
                                <hr className={styles.separatorHor}/>
                                <div className={styles.buttonGroup}>
                                    <FormGroup>
                                        <ModalSuccess display={display}/>
                                        <Button
                                            color="success"
                                            variant="contained"
                                            type="submit"
                                            onClick={handleSave}
                                        >
                                            Save Changes
                                        </Button>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            color="warning"
                                            variant="contained"
                                            onClick={handleEdit}
                                        >
                                            Cancel Changes
                                        </Button>
                                    </FormGroup>
                                </div>
                            </form>
                        ) : (
                            <>
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
                                        onClick={handleToggle}
                                        id={todoId.toString()}
                                        label="Pending"
                                        check={pending}
                                    />
                                    <hr className={styles.separatorVert}/>
                                    <FormCheckBox
                                        name="completed"
                                        color="secondary"
                                        onClick={handleToggle}
                                        id={todoId.toString()}
                                        label="Completed"
                                        check={completed}
                                    />
                                </div>
                                <div className={styles.buttonGroup}>
                                    <FormGroup>
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            onClick={handleEdit}
                                        >
                                            Edit
                                        </Button>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            color="error"
                                            variant="contained"
                                            onClick={handleDelete}
                                        >
                                            Delete To-Do
                                        </Button>
                                    </FormGroup>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </BaseTemplate>
        </React.Fragment>
    );
};

export default SingleTodoItem;
