import React, {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {Typography} from "@mui/material";
import ModalSuccess from "../../components/ModalSuccess/index.js";
import styles from './singleTodoItem.module.scss';
import {getTodos, setTodos} from "../../utils/functions/LocalStorage/index.js";
import FormSelect from "../../components/UI/FormSelect.jsx";
import FormButton from "../../components/UI/FormButton.jsx";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader/index.js";
import Nav from "../../components/Nav/index.js";
import ProgrammingNavigation from "../ProgrammingNavigation/index.js";
import BaseTemplate from "../../templates/BaseTemplate/index.js";

const SingleTodoItemEdit = () => {
    const navigate = useNavigate();
    const {todoId} = useParams();
    const DATA_KEY = 'data';

    const todos = getTodos(DATA_KEY);
    const todoMap = useMemo(() => {
        const map = new Map();
        todos.forEach((todo) => {
            if (todo.itemId) {
                map.set(todo.itemId.toString(), todo);
            }
        });
        return map;
    }, [todos]);

    const initialTodo = todoMap.get(todoId) || {title: '', description: '', status: 'Not-Completed'};
    const [todo, setTodo] = useState(initialTodo);
    const [status, setStatus] = useState(initialTodo.status);
    const [edit, setEdit] = useState(false);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const foundTodo = todoMap.get(todoId);
        if (foundTodo) {
            setTodo(foundTodo);
            setStatus(foundTodo.status);
        }
    }, [todoId]);

    const formik = useFormik({
        initialValues: {
            title: todo.title || '',
            description: todo.description || '',
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            if (!values.title.trim() || !values.description.trim()) return;

            const updatedTodos = todos.map(todo => {
                if (todo.itemId.toString() === todoId) {
                    return {...todo, title: values.title, description: values.description, status};
                }
                return todo;
            });
            setTodos(DATA_KEY, updatedTodos);
            setTodo(prevTodo => ({...prevTodo, title: values.title, description: values.description}));
            handleSave();
        }
    });

    const handleSave = () => {
        setDisplay(true);
        setTimeout(() => {
            setDisplay(false);
            setEdit(false);
        }, 1500);
    };

    const handleSelect = (e) => {
        const newStatus = e.target.value;
        const updatedTodos = todos.map(todo => {
            if (todo.itemId.toString() === todoId) {
                return {...todo, status: newStatus};
            }
            return todo;
        });
        setTodos(DATA_KEY, updatedTodos);
        setStatus(newStatus);
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
                                    <ModalSuccess display={display}/>
                                    <FormButton
                                        color={"success"}
                                        variant={"contained"}
                                        type={"submit"}
                                        text={'Save Changes'}
                                    />
                                    <FormButton
                                        color={"warning"}
                                        variant={"contained"}
                                        text={'Cancel Changes'}
                                        onClick={handleEdit}
                                    />
                                </div>
                            </form>
                        ) : (
                            <>
                                <Typography variant="h5">{todo.title}</Typography>
                                <hr className={styles.separatorHor}/>
                                <Typography variant="body1">{todo.description}</Typography>
                                <hr className={styles.separatorHor}/>
                                <FormSelect
                                    onSelect={handleSelect}
                                    status={status}
                                    id={todoId.toString()}
                                />
                                <div className={styles.buttonGroup}>
                                    <FormButton
                                        color={"secondary"}
                                        variant={"contained"}
                                        text={'Edit'}
                                        onClick={handleEdit}
                                    />
                                    <FormButton
                                        color={"error"}
                                        variant={"contained"}
                                        text={'Delete To-Do'}
                                        onClick={handleDelete}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </BaseTemplate>
        </React.Fragment>
    );
};

export default SingleTodoItemEdit;
