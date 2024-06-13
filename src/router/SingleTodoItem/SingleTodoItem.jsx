import BaseTemplate from "../../templates/BaseTemplate";
import {useNavigate, useParams} from "react-router-dom";
import {getTodos, setTodos} from "../../utils/functions/LocalStorage";
import React, {useEffect, useMemo, useState} from "react";
import ProgrammingNavigation from "../ProgrammingNavigation/index.js";
import styles from './singleTodoItem.module.scss';
import {Button, FormGroup, Typography} from "@mui/material";
import FormCheckBox from "../../components/UI/FormCheckBox.jsx";
import {useFormik} from "formik";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader/index.js";
import Nav from "../../components/Nav/index.js";

const SingleTodoItem = () => {
    const [todo, setTodo] = useState({});
    const [completed, setCompleted] = useState(false);
    const [pending, setPending] = useState(false);
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const DATA_KEY = 'data';

    const index = useParams().todoId;
    const todos = getTodos(DATA_KEY);

    const todoMap = useMemo(() => {
        const map = new Map();
        todos.forEach((todo) => {
            map.set(todo.itemId.toString(), todo);
        })
        return map
    }, [todos])


    let formik = useFormik({
        initialValues: {
            title: todoMap.get(index).title || '',
            description: todoMap.get(index).description || '',
        },
        onSubmit: (values) => {
            if (values.title.trim() === '' || values.description.trim() === '') return;

            const updatedTodos = todos.map((todo) => {
                if (todo.itemId.toString() === index) {
                    return {...todo, title: values.title, description: values.description};
                }
                return todo;
            })
            setTodos(DATA_KEY, updatedTodos);

            setTodo({...todo, title: values.title, description: values.description})
            setEdit(!edit);
        }
    })

    useEffect(() => {
        const foundTodo = todoMap.get(index);
        if (foundTodo) {
            setTodo(foundTodo);
            setCompleted(foundTodo.completed);
            setPending(foundTodo.pending);
        }
    }, []);


    const handleToggle = (e) => {
        const {id, name} = e.target;

        const updatedTodos = todos.map((todo) => {
            if (todo.itemId.toString() === id) {
                return name === 'completed' ? {...todo, completed: !completed} : {...todo, pending: !pending}
            }
            return todo;
        })
        setTodos(DATA_KEY, updatedTodos);
        name === 'completed' ? setCompleted(!completed) : setPending(!pending)
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = (todoId) => () => {
        try {
            const filteredNotes = todos.filter((todo) => todo.itemId.toString() !== todoId);
            setTodos(DATA_KEY, filteredNotes)
            navigate('/')
        } catch (err) {
            console.dir('Failed to delete the note', err)
        }
    }
    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>
            <BaseTemplate>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        {edit && <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <Typography variant="h5">
                                Title:
                            </Typography>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                name={'title'}
                                id={'title'}
                                type={'text'}
                                className={styles.title}
                            />
                            <Typography variant="h5">
                                Description:
                            </Typography>
                            <textarea
                                id={'description'}
                                name={'description'}
                                placeholder={'Description of To-Do...'}
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className={styles.description}
                            />

                            <hr className={styles.separatorHor}/>

                            <div className={styles.buttonGroup}>
                                {edit && <FormGroup>
                                    <Button
                                        id={index}
                                        color={'success'}
                                        variant={'contained'}
                                        type={'submit'}
                                    >Save Changes</Button>
                                </FormGroup>}
                                {edit && <FormGroup>
                                    <Button
                                        id={index}
                                        color={'warning'}
                                        variant={'contained'}
                                        onClick={handleEdit}
                                    >Cancel Changes</Button>
                                </FormGroup>}
                            </div>
                        </form>}
                        {!edit && <Typography variant="h5">
                            {completed ? <s>{todo.title}</s> : todo.title}
                        </Typography>}

                        {!edit && <hr className={styles.separatorHor}/>}
                        {!edit && <Typography variant="body1">
                            {completed ? <s>{todo.description}</s> : todo.description}
                        </Typography>}
                        {!edit && <hr className={styles.separatorHor}/>}

                        {!edit && <div className={styles.checkBoxGroup}>
                            <FormCheckBox
                                name={'pending'}
                                color="warning"
                                onClick={handleToggle}
                                id={index.toString()}
                                label="Pending"
                                check={pending}
                            />
                            <hr className={styles.separatorVert}/>
                            <FormCheckBox
                                name={'completed'}
                                color="secondary"
                                onClick={handleToggle}
                                id={index.toString()}
                                label="Completed"
                                check={completed}
                            />
                        </div>}
                        {!edit && <div className={styles.buttonGroup}>
                            <FormGroup>
                                <Button
                                    id={index}
                                    color={'secondary'}
                                    variant={'contained'}
                                    onClick={handleEdit}
                                >Edit</Button>
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    id={index}
                                    color={'error'}
                                    variant={'contained'}
                                    onClick={handleDelete(index)}
                                >Delete to-do</Button>
                            </FormGroup>

                        </div>}

                    </div>
                </div>
            </BaseTemplate>
        </React.Fragment>
    )
}

export default SingleTodoItem;