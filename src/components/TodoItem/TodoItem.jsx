import styles from './todoItem.module.scss';
import {Typography} from "@mui/material";
import {useMemo, useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import {getTodos, setTodos} from "../../utils/functions/LocalStorage/index.js";
import FormSelect from "../UI/FormSelect.jsx";
import FormButton from "../UI/FormButton.jsx";

const TodoItem = ({title, description, id, onDelete, view}) => {
    const navigate = useNavigate();
    const DATA_KEY = 'data';

    const initialTodo = useMemo(() => {
        const todos = getTodos(DATA_KEY);
        return todos.find(todo => todo.itemId.toString() === id.toString()) || {};
    }, [id]);

    const [status, setStatus] = useState(initialTodo.status || 'Not-Completed');

    const handleSelect = (e) => {
        const updatedStatus = e.target.value;
        const updatedTodos = getTodos(DATA_KEY).map(todo =>
            todo.itemId.toString() === id.toString() ? {...todo, status: updatedStatus} : todo
        );

        setTodos(DATA_KEY, updatedTodos);
        setStatus(updatedStatus);
    };

    const handleClick = () => {
        navigate(view ? `/todosView/${id}` : `/todos/${id}`);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant="h6">
                    <b className={styles.boldTitle}>{title}</b>
                </Typography>
                <hr className={styles.separator}/>

                <Typography variant="body1">
                    {description}
                </Typography>
                <hr className={styles.separator}/>

                <FormSelect
                    view={view}
                    status={status}
                    onSelect={handleSelect}
                    id={id.toString()}
                />

                <hr className={styles.separator}/>

                <div className={styles.buttonContainer}>
                    <FormButton
                        color={"secondary"}
                        variant={"contained"}
                        text={'View'}
                        onClick={handleClick}
                        id={id.toString()}
                    />

                    {onDelete &&
                        <FormButton
                            color={"error"}
                            variant={"contained"}
                            text={'Delete'}
                            onClick={handleDelete}
                            id={id.toString()}
                        />}
                </div>

            </div>
        </div>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onDelete: PropTypes.func,
    view: PropTypes.bool,
};

export default TodoItem;
