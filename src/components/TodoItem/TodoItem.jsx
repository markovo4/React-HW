import styles from './todoItem.module.scss';
import {Button, FormGroup, Typography} from "@mui/material";
import {getTodos, setTodos} from "../../utils/functions/LocalStorage/index.js";
import {useEffect, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import FormCheckBox from "../UI/FormCheckBox.jsx";

const TodoItem = ({title, description, id, onDelete, view}) => {
    const navigate = useNavigate();
    const DATA_KEY = 'data';

    const initialTodo = useMemo(() => {
        const todos = getTodos(DATA_KEY);
        return todos.find(todo => todo.itemId.toString() === id.toString()) || {}
    }, [id])

    const [completed, setCompleted] = useState(initialTodo.completed || false);
    const [pending, setPending] = useState(initialTodo.pending || false);


    useEffect(() => {
        setCompleted(initialTodo.completed || false);
        setPending(initialTodo.pending || false);
    }, [initialTodo])

    const handleToggle = (e) => {
        const {id, name} = e.target;
        const notes = getTodos(DATA_KEY)

        const updatedNotes = notes.map((note) => {
            if (note.itemId.toString() === id) {
                return name === 'completed' ? {...note, completed: !completed} : {...note, pending: !pending}
            }
            return note;
        })
        setTodos(DATA_KEY, updatedNotes);
        name === 'completed' ? setCompleted(!completed) : setPending(!pending)
    }


    const handleClick = (e) => {
        view ? navigate(`/todosView/${e.target.id}`) : navigate(`/todos/${e.target.id}`)
    }

    const handleDelete = (e) => {
        onDelete(e.target.id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant="h6">

                    {completed ?
                        <b className={styles.boldTitle}><s>{title}</s></b>
                        : <b className={styles.boldTitle}>{title}</b>}

                </Typography>
                <hr className={styles.separator}/>

                <Typography variant="body1">
                    {completed ? <s>{description}</s> : description}
                </Typography>
                <hr className={styles.separator}/>


                <FormCheckBox
                    name={'pending'}
                    color="warning"
                    onClick={handleToggle}
                    id={id.toString()}
                    label="Pending"
                    check={pending}
                />

                <FormCheckBox
                    name={'completed'}
                    color="secondary"
                    onClick={handleToggle}
                    id={id.toString()}
                    label="Completed"
                    check={completed}
                />

                <hr className={styles.separator}/>

                <FormGroup>
                    <Button
                        color={'secondary'}
                        variant={'text'}
                        onClick={handleClick}
                    ><b id={id} className={styles.bold}>View To-do</b></Button>
                </FormGroup>

                {onDelete && <FormGroup>
                    <Button
                        id={id}
                        color={'error'}
                        variant={'text'}
                        onClick={handleDelete}
                    ><b className={styles.bold}>Delete to-do</b></Button>
                </FormGroup>}
            </div>
        </div>
    )
}


TodoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    onDelete: PropTypes.func,
    view: PropTypes.bool,
}
export default TodoItem;