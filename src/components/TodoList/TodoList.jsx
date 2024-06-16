import {Typography} from "@mui/material";
import styles from './todoList.module.scss';
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import {clearTodos, getTodos, setTodos} from "../../utils/functions/LocalStorage";
import {useEffect, useState} from "react";
import FormButton from "../UI/FormButton.jsx";


const TodoList = () => {
    const [notesList, setNotesList] = useState(() => {
        const notes = getTodos();
        return notes ? [...notes].reverse() : [];
    });

    useEffect(() => {
        const notes = getTodos();
        if (notes) {
            setNotesList([...notes].reverse());
        }
    }, []);

    const handleDelete = (id) => () => {
        const notesData = getTodos();
        const filteredNotes = notesData.filter((note) => note.itemId !== id);

        setTodos(filteredNotes);
        setNotesList([...filteredNotes].reverse());
    };

    const handleDeleteAll = () => {
        clearTodos();
        setNotesList([]);
    };

    const handleCreate = (newNote) => {
        const previousNotes = getTodos() || [];
        const updatedNotes = [...previousNotes, newNote];

        setTodos(updatedNotes);
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
                <FormButton
                    color="error"
                    variant="outlined"
                    onClick={handleDeleteAll}
                    text="Delete all to-dos"
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
