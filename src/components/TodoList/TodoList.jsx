import {Typography} from "@mui/material";
import styles from './todoList.module.scss';
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import {clearTodos, getTodos, setTodos} from "../../utils/functions/LocalStorage";
import {useEffect, useState} from "react";

const DATA_KEY = 'data';

const TodoList = () => {
    const [notesList, setNotesList] = useState(() => {
        const notes = getTodos(DATA_KEY);
        return notes ? [...notes].reverse() : [];
    });

    useEffect(() => {
        const notes = getTodos(DATA_KEY);
        if (notes) {
            setNotesList([...notes].reverse());
        }
    }, []);

    const handleDelete = (id) => () => {
        const notesData = getTodos(DATA_KEY);
        const filteredNotes = notesData.filter((note) => note.itemId !== id);

        setTodos(DATA_KEY, filteredNotes);
        setNotesList([...filteredNotes].reverse());
    };

    const handleDeleteAll = () => {
        clearTodos();
        setNotesList([]);
    };

    const handleCreate = (newNote) => {
        const previousNotes = getTodos(DATA_KEY) || [];
        const updatedNotes = [...previousNotes, newNote];

        setTodos(DATA_KEY, updatedNotes);
        setNotesList([...updatedNotes].reverse());
    };

    return (
        <div className={styles.list}>
            <Typography
                variant={'h4'}
                align={'center'}
            >
                <b className={styles.bold}>CREATE TO-DO NOTE</b>
            </Typography>
            <div className={styles.container}>
                <TodoForm
                    onDeleteAll={handleDeleteAll}
                    onAddTodo={handleCreate}
                />
                <div className={styles.wrapper}>
                    {notesList.map((note) => (
                        <TodoItem
                            key={note.itemId}
                            title={note.title}
                            description={note.description}
                            id={note.itemId}
                            onDelete={handleDelete(note.itemId)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
