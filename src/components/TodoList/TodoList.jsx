import {Typography} from "@mui/material";
import styles from './todoList.module.scss';
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import {clearTodos, getTodos, setTodos} from "../../utils/functions/LocalStorage";
import {useEffect, useState} from "react";
import {useSnackbar} from "notistack";
import {cloneDeep} from "lodash";

const TodoList = () => {
    const todos = getTodos();

    const {enqueueSnackbar} = useSnackbar();
    const [todosList, setTodosList] = useState(todos ? [...todos].reverse() : []);

    useEffect(() => {
        if (todos) {
            const todosCopy = cloneDeep(todos)
            setTodosList([...todosCopy].reverse());
        }
    }, []);

    const handleDelete = (id, title, variant) => () => {
        const notesData = getTodos();
        const filteredNotes = notesData.filter((note) => note.itemId !== id);

        setTodos(filteredNotes);
        setTodosList([...filteredNotes].reverse());
        enqueueSnackbar(`${title} Todo has been deleted`, {variant})
    };

    const handleDeleteAll = () => {
        clearTodos();
        setTodosList([]);
    };

    const handleCreate = (newNote, variant) => {
        const previousNotes = getTodos() || [];
        const updatedNotes = [...previousNotes, newNote];

        setTodos(updatedNotes);
        setTodosList([...updatedNotes].reverse());
        enqueueSnackbar("Todo is Added Successfully", {variant})

    };


    return (
        <div className={styles.list}>
            <Typography
                variant="h6"
                align={'center'}
            >
                <b className={styles.bold}>CREATE TO-DO</b>
            </Typography>

            <div className={styles.container}>
                <TodoForm
                    onDeleteAll={handleDeleteAll}
                    onAddTodo={handleCreate}
                />

                <div className={styles.wrapper}>
                    {todosList.map((note) => (
                        <TodoItem
                            key={note.itemId}
                            title={note.title}
                            description={note.description}
                            id={note.itemId}
                            onDelete={handleDelete(note.itemId, note.title, 'warning')}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TodoList;
