import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {FormGroup} from "@mui/material";
import PropTypes from "prop-types";
import {isEmpty} from "lodash";

import validationSchema from "../../utils/validations/validationSchema.js";
import FormInput from "../UI/FormInput";
import FormButton from "../UI/FormButton";
import {idGenerator} from "../../utils/functions/IdGenerator";
import {getTodos} from "../../utils/functions/LocalStorage";
import styles from './todoForm.module.scss';

const formInitValues = {
    title: '',
    description: '',
};

const TodoForm = ({onAddTodo, onDeleteAll}) => {
    const [iterator, setIterator] = useState(idGenerator(0));

    useEffect(() => {
        const notes = getTodos();
        if (!isEmpty(notes)) {
            const savedId = notes.at(-1).itemId;
            setIterator(idGenerator(savedId));
        }
    }, []);

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            const newItemId = iterator.next().value;
            const newTodo = {
                title: values.title.trim(),
                description: values.description.trim(),
                itemId: newItemId,
                status: 'Not-Completed',
            };
            onAddTodo(newTodo);
            resetForm();
        },
    });

    const handleClear = () => {
        formik.resetForm();
    };

    const handleDeleteAll = () => {
        onDeleteAll();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.wrapper}>
                <FormInput
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    label="Title:"
                    name="title"
                    id="title"
                    type="text"
                />
                <FormGroup>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description of To-Do..."
                        className={styles.textArea}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </FormGroup>
                <FormButton
                    color="secondary"
                    variant="outlined"
                    type="submit"
                    text="Create To-Do"
                />
                <FormButton
                    color="warning"
                    variant="outlined"
                    onClick={handleClear}
                    text="Clear All Text-fields"
                />
                <FormButton
                    color="error"
                    variant="outlined"
                    onClick={handleDeleteAll}
                    text="Delete all to-dos"
                />
            </div>
        </form>
    );
};

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
};

export default TodoForm;
