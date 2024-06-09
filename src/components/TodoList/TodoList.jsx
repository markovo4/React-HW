import {Container} from "react-bootstrap";
import {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";
import {getNotes, setNotes} from "../../functions/LocalStorage/index.js";
import {isEmpty} from 'lodash';
import TodoForm from "../TodoForm/index.js";

const TodoList = () => {
    const [notesList, setNotesList] = useState([]);
    const DATA_KEY = 'data';


    useEffect(() => {
        const notes = getNotes(DATA_KEY)
        if (!isEmpty(notes)) {
            setNotesList([...notes].reverse())
        }
    }, [])

    const handleDelete = (index) => () => {
        try {
            const notesData = getNotes(DATA_KEY);
            const filteredNotes = notesData.filter((note) => note.itemId !== index);

            setNotes(DATA_KEY, filteredNotes)
            setNotesList([...filteredNotes].reverse())
        } catch (err) {
            console.dir('Failed to delete the note', err)
        }
    }

    const handleDeleteAll = () => {
        try {
            localStorage.clear();
            setNotes(DATA_KEY, []);
            setNotesList([]);
        } catch (err) {
            console.dir('Failed to delete all notes', err);
        }
    }

    const handleCreate = (newNote) => {
        try {
            const previousNotes = getNotes(DATA_KEY)
            const updatedNotes = previousNotes ? [...previousNotes, newNote] : [newNote]
            setNotes(DATA_KEY, updatedNotes)
            setNotesList([...updatedNotes].reverse())
        } catch (err) {
            console.dir('Failed to save the note', err)
        }
    }

    return (
        <Container className="d-flex">
            <Container className="w-50">
                <TodoForm
                    onAddNote={handleCreate}
                    onDeleteAll={handleDeleteAll}
                />

            </Container>
            <Container className="d-flex flex-wrap col-8 justify-content-evenly gap-4">
                {notesList.map((note, index) => (
                    <TodoItem
                        key={index}
                        title={note.title}
                        subtitle={note.subtitle}
                        id={note.itemId}
                        onDelete={handleDelete(note.itemId)}
                    />
                ))}
            </Container>
        </Container>
    );
}

export default TodoList;