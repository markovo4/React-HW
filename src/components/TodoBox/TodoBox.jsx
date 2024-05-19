import {Button, Form, InputGroup} from 'react-bootstrap';
import {Fragment, useState} from "react";
import TodoItem from "../TodoItem";

const TodoBox = () => {
    const [note, setNote] = useState('');
    const [tasks, setTask] = useState([])
    const handleChange = (e) => {
        setNote(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.trim() !== '') {
            setTask([note, ...tasks]);
            setNote('');
        }
    }

    const handleRemove = (index) => () => {
        const newTaskList = tasks.filter((item, i) => i !== index);
        setTask(newTaskList);
    }

    return (
        <Fragment>
            <InputGroup className={'mb-3'}>
                <Form className={'d-flex'} onSubmit={handleSubmit}>
                    <Form.Group className={'me-3'}>
                        <Form.Control
                            type={'text'}
                            value={note}
                            className={'form-control'}
                            placeholder={'I am going...'}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button
                        type={'submit'}
                        className={'btn btn-primary'}
                    >add</Button>
                </Form>
            </InputGroup>
            {tasks.map((task, i) => {
                return (
                    <TodoItem
                        key={i}
                        id={i}
                        task={task}
                        onRemove={handleRemove(i)}
                    />
                )
            })}

        </Fragment>
    )
}

export default TodoBox;