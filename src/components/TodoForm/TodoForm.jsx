import {Button, Form, FormGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {getNotes} from "../../functions/LocalStorage/index.js";
import {idGenerator} from "../../functions/IdGenerator/index.js";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";

const TodoForm = ({onDeleteAll, onAddNote}) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [iterator, setIterator] = useState(idGenerator(0));
    const DATA_KEY = 'data';

    useEffect(() => {
        const notes = getNotes(DATA_KEY)
        if (!isEmpty(notes)) {
            const savedId = notes.at(-1).itemId
            setIterator(idGenerator(savedId))
        }
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        name === 'title' ? setTitle(value) : setSubtitle(value);
    };

    const handleClear = () => {
        setTitle('')
        setSubtitle('')
    }

    const handleDeleteAll = () => {
        onDeleteAll();
    }

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

        onAddNote(newNote);
        handleClear();

    }

    return (
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
    )
}

TodoForm.propTypes = {
    onDeleteAll: PropTypes.func.isRequired,
    onAddNote: PropTypes.func.isRequired,
}

export default TodoForm;