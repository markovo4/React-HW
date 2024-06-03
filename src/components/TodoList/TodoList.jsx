import {Button, Container, Form, FormGroup} from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";
import {idGenerator} from "../IdGenerator";
import _ from 'lodash';
import {getNotes, setNotes} from "../LocalStorage/index.js";

const TodoList = () => {
    const [newNote, setNewNote] = useState(null);
    const [notesList, setNotesList] = useState([]);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [iterator, setIterator] = useState(idGenerator(0));
    const [savedId, setSavedId] = useState(null);
    const DATA_KEY = 'data';
    const notes = getNotes(DATA_KEY);

    useEffect(() => {
        if (!_.isEmpty(getNotes(DATA_KEY))) {
            setSavedId(getNotes(DATA_KEY).at(-1).itemId)
            setIterator(idGenerator(savedId))
            setNotesList([...notes].reverse())
        }

    }, [savedId])
    const handleChange = (e) => {
        const {name, value} = e.target;
        name === 'title' ? setTitle(value) : setSubtitle(value);
    };

    const handleClick = () => {
        if (title.trim() !== '' || subtitle.trim() !== '') {
            const newItemId = iterator.next().value;
            setNewNote({
                title: title,
                subtitle: subtitle,
                itemId: newItemId,
                completed: false
            });
        }
    }

    const handleDelete = (index) => () => {
        const notesData = getNotes(DATA_KEY);

        const filteredNotes = notesData.filter((note) => note.itemId !== index);
        setNotes(DATA_KEY, filteredNotes)
        setNotesList([...filteredNotes].reverse())
    }

    const handleClear = () => {
        setTitle('')
        setSubtitle('')
    }

    const handleDeleteAll = () => {
        localStorage.clear();
        setNotes(DATA_KEY, [])
        setNotesList([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '' || subtitle.trim() === '') return;
        const previousNotes = getNotes(DATA_KEY)
        setNotes(DATA_KEY, previousNotes ? [...previousNotes, newNote] : [newNote])
        setNotesList(previousNotes ? [newNote, ...previousNotes] : [newNote])
        setTitle('')
        setSubtitle('')


    }
    return (
        <React.Fragment>
            <Container className={'d-flex'}>
                <Container className={'w-50'}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Form.Label>Task title</Form.Label>
                            <Form.Control
                                placeholder={'Title'}
                                value={title}
                                onChange={handleChange}
                                name={'title'}
                            >

                            </Form.Control>

                            <Form.Label>Task body</Form.Label>
                            <Form.Control
                                as={'textarea'}
                                placeholder={'Task body'}
                                style={{height: '200px'}}
                                value={subtitle}
                                onChange={handleChange}
                                name={'subtitle'}
                            >

                            </Form.Control>
                            <div className={'d-flex flex-wrap justify-content-lg-between p-2 gap-2'}>
                                <div className={'d-flex gap-2 flex-grow-0'}>

                                    <Button
                                        className={'w-50'}
                                        type={'submit'}
                                        name={'new-note'}
                                        onClick={handleClick}
                                    >Create Task</Button>

                                    <Button
                                        className={'btn-warning w-50'}
                                        onClick={handleClear}
                                    >Clear</Button>

                                </div>

                                <Button
                                    className={'btn-danger'}
                                    onClick={handleDeleteAll}
                                >Delete all Tasks</Button>

                            </div>

                        </FormGroup>
                    </Form>
                </Container>
                <Container className={'d-flex flex-wrap col-8 justify-content-evenly gap-4'}>
                    {notesList.map((note, index) => {
                        return (<TodoItem
                            key={index}
                            title={note.title}
                            subtitle={note.subtitle}
                            id={note.itemId}
                            onDelete={handleDelete(note.itemId)}
                        />)
                    })}
                </Container>
            </Container>
        </React.Fragment>

    )
}

export default TodoList;