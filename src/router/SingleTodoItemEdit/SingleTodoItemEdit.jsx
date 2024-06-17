import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {Typography} from "@mui/material";
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
import {useSnackbar} from "notistack";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const SingleTodoItemEdit = () => {
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

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

    useEffect(() => {
        if (todoEdit) {
            const todoEditCopy = cloneDeep(todoEdit)
            setTodoEdit(todoEditCopy)
        }
    }, [todoId]);

    const initialTodoValues = {
        title: todoEdit.title || '',
        description: todoEdit.description || '',
    }

    const formik = useFormik({
        initialValues: {...initialTodoValues},
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
            handleSave('success');
        }
    });

    const handleSave = (variant) => {
        enqueueSnackbar("Changes Saved!", {variant})
        setEdit(false);
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

    const handleAbortChanges = (variant) => () => {
        setEdit(!edit);
        enqueueSnackbar("Changes Aborted!", {variant})
        formik.resetForm()
    }

    const handleDelete = (variant) => () => {
        const filteredTodos = todos.filter(todo => todo.itemId.toString() !== todoId);
        enqueueSnackbar(`${todoEdit.title} Todo has been Deleted!`, {variant})
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
                                    <FormButton
                                        color={"success"}
                                        variant={"contained"}
                                        type={"submit"}
                                        icon={<DoneIcon/>}
                                    />
                                    <FormButton
                                        color={"warning"}
                                        variant={"contained"}
                                        icon={<CloseIcon/>}
                                        onClick={handleAbortChanges('info')}
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
                                        onClick={handleEdit}
                                        icon={<EditNoteIcon/>}
                                    />
                                    <FormButton
                                        color={"error"}
                                        variant={"contained"}
                                        icon={<DeleteIcon/>}
                                        onClick={handleDelete('warning')}
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
