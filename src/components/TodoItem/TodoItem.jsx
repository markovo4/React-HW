import styles from './todoItem.module.scss';
import {Button, FormGroup, Typography} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import FormCheckBox from "../UI/FormCheckBox.jsx";
import {getTodos, setTodos} from "../../utils/functions/LocalStorage/index.js";

const TodoItem = ({title, description, id, onDelete, view}) => {
    const navigate = useNavigate();
    const DATA_KEY = 'data';

    const initialTodo = useMemo(() => {
        const todos = getTodos(DATA_KEY);
        return todos.find(todo => todo.itemId.toString() === id.toString()) || {};
    }, [id]);

    const [completed, setCompleted] = useState(initialTodo.completed || false);
    const [pending, setPending] = useState(initialTodo.pending || false);

    useEffect(() => {
        setCompleted(initialTodo.completed || false);
        setPending(initialTodo.pending || false);
    }, [initialTodo]);

    const handleToggle = (e) => {
        const {id, name} = e.target;
        const todos = getTodos(DATA_KEY);

        const updatedTodos = todos.map(todo => {
            if (todo.itemId.toString() === id) {
                return name === 'completed' ? {...todo, completed: !completed} : {...todo, pending: !pending};
            }
            return todo;
        });

        setTodos(DATA_KEY, updatedTodos);
        name === 'completed' ? setCompleted(!completed) : setPending(!pending);
    };

    const handleClick = (e) => {
        const targetId = e.currentTarget.id;
        view ? navigate(`/todosView/${targetId}`) : navigate(`/todos/${targetId}`);
    };

    const handleDelete = (e) => {
        const targetId = e.currentTarget.id;
        onDelete(targetId);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant="h6">
                    {completed ? <b className={styles.boldTitle}><s>{title}</s></b> :
                        <b className={styles.boldTitle}>{title}</b>}
                </Typography>
                <hr className={styles.separator}/>

                <Typography variant="body1">
                    {completed ? <s>{description}</s> : description}
                </Typography>
                <hr className={styles.separator}/>

                <FormCheckBox
                    name="pending"
                    color="warning"
                    onClick={handleToggle}
                    id={id.toString()}
                    label="Pending"
                    check={pending}
                />

                <FormCheckBox
                    name="completed"
                    color="secondary"
                    onClick={handleToggle}
                    id={id.toString()}
                    label="Completed"
                    check={completed}
                />

                <hr className={styles.separator}/>

                <FormGroup>
                    <Button
                        color="secondary"
                        variant="text"
                        onClick={handleClick}
                        id={id.toString()}
                    >
                        <b>View To-do</b>
                    </Button>
                </FormGroup>

                {onDelete && (
                    <FormGroup>
                        <Button
                            id={id.toString()}
                            color="error"
                            variant="text"
                            onClick={handleDelete}
                        >
                            <b>Delete to-do</b>
                        </Button>
                    </FormGroup>
                )}
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onDelete: PropTypes.func,
    view: PropTypes.bool,
};

export default TodoItem;
