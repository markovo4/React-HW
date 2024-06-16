import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {Typography} from "@mui/material";
import ModalSuccess from "../../components/ModalSuccess";
import styles from './singleTodoItem.module.scss';
import {getTodos, setTodos} from "../../utils/functions/LocalStorage";
import FormSelect from "../../components/UI/FormSelect.jsx";
import FormButton from "../../components/UI/FormButton.jsx";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import Nav from "../../components/Nav";
import ProgrammingNavigation from "../ProgrammingNavigation";
import BaseTemplate from "../../templates/BaseTemplate";
import routerNames from "../RouterMapping/RouterNames.js";
import validationSchema from "../../utils/validations/validationSchema.js";
import {cloneDeep} from "lodash";

const SingleTodoItemEdit = () => {
    const navigate = useNavigate();
    const {homePage: homePage} = routerNames;
    const {todoId} = useParams();

    const todos = getTodos();

    const [todoEdit, setTodoEdit] = useState(todos.find(todo => todo.itemId.toString() === todoId) || {
        title: '',
        description: '',
        status: 'Not-Completed'
    });

    const [status, setStatus] = useState(todoEdit.status);
    const [edit, setEdit] = useState(false);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (todoEdit) {
            const todoEditCopy = cloneDeep(todoEdit)
            setTodoEdit(todoEditCopy)
        }
    }, [todoId]);

    const formik = useFormik({
        initialValues: {
            title: todoEdit.title || '',
            description: todoEdit.description || '',
        },
        validationSchema,
        onSubmit: (values) => {

            const updatedTodos = todos.map(todo => {
                if (todo.itemId.toString() === todoId) {
                    return {...todo, title: values.title, description: values.description, status};
                }
                return todo;
            });
            setTodos(updatedTodos);
            setTodoEdit(prevTodo => ({...prevTodo, title: values.title, description: values.description}));
            handleSave();
        }
    });

    const handleSave = () => {
        setDisplay(true);

        const timeoutId = setTimeout(() => {
            setDisplay(false);
            setEdit(false);
            clearTimeout(timeoutId);
        }, 1000);

    };

    const handleSelect = (e) => {
        const newStatus = e.target.value;

        const updatedTodos = todos.map(todo => {
            if (todo.itemId.toString() === todoId) {
                return {...todo, status: newStatus};
            }
            return todo;
        });

        setTodos(updatedTodos);
        setStatus(newStatus);
    };

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        const filteredTodos = todos.filter(todo => todo.itemId.toString() !== todoId);
        setTodos(filteredTodos);
        navigate(homePage);
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
                                <Typography variant="h5">{todoEdit.title}</Typography>
                                <hr className={styles.separatorHor}/>
                                <Typography variant="body1">{todoEdit.description}</Typography>
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
