import FormInput from "../UI/FormInput.jsx";
import {useFormik} from "formik";
import styles from './todoForm.module.scss'
import {Button, FormGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {idGenerator} from "../../utils/functions/IdGenerator";
import {getTodos} from "../../utils/functions/LocalStorage/index.js";
import {isEmpty} from "lodash";
import PropTypes from "prop-types";

const formInitValues = {
    title: '',
    description: '',
}
const TodoForm = ({onAddTodo, onDeleteAll}) => {
    const [iterator, setIterator] = useState(idGenerator(0))
    const DATA_KEY = 'data';


    useEffect(() => {
        const notes = getTodos(DATA_KEY)
        if (!isEmpty(notes)) {
            const savedId = notes.at(-1).itemId
            setIterator(idGenerator(savedId))
        }
    }, []);

    const handleClear = () => {
        formik.resetForm();
    }

    const handleDeleteAll = () => {
        onDeleteAll();
    }

    const formik = useFormik({
        initialValues: {...formInitValues},
        onSubmit: (values, {resetForm}) => {
            if (values.title.trim() === '' || values.description.trim() === '') return;
            const newItemId = iterator.next().value;
            const newTodo = {
                title: values.title,
                description: values.description,
                itemId: newItemId,
                completed: false,
                pending: false,
            }
            onAddTodo(newTodo);
            resetForm();
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.wrapper}>
                <FormInput
                    onChange={formik.handleChange}
                    value={formik.values.title.trim()}
                    label={'Title:'}
                    name={'title'}
                    id={'title'}
                    type={'text'}
                />

                <FormGroup>
                <textarea
                    id={'description'}
                    name={'description'}
                    placeholder={'Description of To-Do...'}
                    className={styles.textArea}
                    onChange={formik.handleChange}
                    value={formik.values.description.trim()}
                />
                </FormGroup>

                <FormGroup>
                    <Button
                        type={'submit'}
                        color={'secondary'}
                        variant={'outlined'}
                    >Create To-Do</Button>
                </FormGroup>

                <FormGroup>
                    <Button
                        color={'warning'}
                        variant={'outlined'}
                        onClick={handleClear}
                    >Clear All Text-fields</Button>
                </FormGroup>

                <FormGroup>
                    <Button
                        color={'error'}
                        variant={'outlined'}
                        onClick={handleDeleteAll}
                    >Delete all to-dos</Button>
                </FormGroup>

            </div>
        </form>
    )
}

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
}
export default TodoForm;