import {Button, Container, Form, FormGroup} from "react-bootstrap";
import {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";
import {idGenerator} from "../IdGenerator";
import {getNotes, setNotes} from "../LocalStorage/index.js";
import {isEmpty} from 'lodash';

const TodoList = () => {
    const [notesList, setNotesList] = useState([]);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [iterator, setIterator] = useState(idGenerator(0));
    const DATA_KEY = 'data';


    useEffect(() => {
        const notes = getNotes(DATA_KEY)
        if (!isEmpty(notes)) {
            const savedId = notes.at(-1).itemId

            setIterator(idGenerator(savedId))
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

    const handleClear = () => {
        setTitle('')
        setSubtitle('')
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        name === 'title' ? setTitle(value) : setSubtitle(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || subtitle.trim() === '') return;

        const newItemId = iterator.next().value;
        const newNote = {
            title,
            subtitle,
            itemId: newItemId,
            completed: false
        };

        try {
            const previousNotes = getNotes(DATA_KEY)
            const updatedNotes = previousNotes ? [...previousNotes, newNote] : [newNote]
            setNotes(DATA_KEY, updatedNotes)
            setNotesList([...updatedNotes].reverse())
        } catch (err) {
            console.dir('Failed to save the note', err)
        }

        handleClear()
    }

    return (
        <Container className="d-flex">
            <Container className="w-50">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Form.Label>Task title</Form.Label>
                        <Form.Control
                            placeholder="Title"
                            value={title}
                            onChange={handleChange}
                            name="title"
                        />
                        <Form.Label>Task body</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Task body"
                            style={{height: '200px'}}
                            value={subtitle}
                            onChange={handleChange}
                            name="subtitle"
                        />
                        <div className="d-flex flex-wrap justify-content-lg-between p-2 gap-2">
                            <div className="d-flex gap-2 flex-grow-0">
                                <Button
                                    className="w-50"
                                    type="submit"
                                    name="new-note"
                                >Create Task</Button>
                                <Button
                                    className="btn-warning w-50"
                                    onClick={handleClear}
                                >Clear</Button>
                            </div>
                            <Button
                                className="btn-danger"
                                onClick={handleDeleteAll}
                            >Delete all Tasks</Button>
                        </div>
                    </FormGroup>
                </Form>
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