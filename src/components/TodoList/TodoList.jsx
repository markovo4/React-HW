import {Typography} from "@mui/material";
import styles from './todoList.module.scss'
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import {clearTodos, getTodos, setTodos} from "../../utils/functions/LocalStorage";
import {isEmpty} from "lodash";
import {useEffect, useState} from "react";

const TodoList = () => {
    const [notesList, setNotesList] = useState([]);
    const DATA_KEY = 'data';


    useEffect(() => {
        const notes = getTodos(DATA_KEY)
        if (!isEmpty(notes)) {
            setNotesList([...notes].reverse())
        }
    }, [])

    const handleDelete = (index) => () => {
        try {
            const notesData = getTodos(DATA_KEY);
            const filteredNotes = notesData.filter((note) => note.itemId !== index);

            setTodos(DATA_KEY, filteredNotes)
            setNotesList([...filteredNotes].reverse())
        } catch (err) {
            console.dir('Failed to delete the note', err)
        }
    }

    const handleDeleteAll = () => {
        try {
            clearTodos();
            setTodos(DATA_KEY, []);
            setNotesList([]);
        } catch (err) {
            console.dir('Failed to delete all notes', err);
        }
    }

    const handleCreate = (newNote) => {
        try {
            const previousNotes = getTodos(DATA_KEY)
            const updatedNotes = previousNotes ? [...previousNotes, newNote] : [newNote]
            setTodos(DATA_KEY, updatedNotes)
            setNotesList([...updatedNotes].reverse())
        } catch (err) {
            console.dir('Failed to save the note', err)
        }
    }

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
                    {notesList.map((note, index) => (
                        <TodoItem
                            key={index}
                            title={note.title}
                            description={note.description}
                            id={note.itemId}
                            onDelete={handleDelete(note.itemId)}
                        />
                    ))}
                </div>
            </div>
        </div>


    )
}

export default TodoList;