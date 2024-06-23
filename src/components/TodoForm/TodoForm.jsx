import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {FormGroup} from "@mui/material";
import PropTypes from "prop-types";
import todoFormValidation from "../../utils/validations/todoFormValidation";
import FormInput from "../UI/FormInput";
import FormButton from "../UI/FormButton";
import styles from './todoForm.module.scss';
import {v4 as uuidv4} from 'uuid';

const formInitValues = {
    title: '',
    description: '',
};

const TodoForm = ({onAddTodo, onDeleteAll}) => {
    const [currentId, setCurrentId] = useState(uuidv4())

    useEffect(() => {
        setCurrentId(uuidv4())
    }, [onAddTodo]);

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: todoFormValidation,
        onSubmit: (values, {resetForm}) => {
            const newTodo = {
                title: values.title.trim(),
                description: values.description.trim(),
                itemId: currentId,
                status: 'Not-Completed',
            };

            onAddTodo(newTodo, 'success');
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
                <div className={styles.buttonWrapper}>
                    <FormButton
                        color="secondary"
                        variant="contained"
                        type="submit"
                        text="Create"
                    />
                    <FormButton
                        color="warning"
                        variant="contained"
                        onClick={handleClear}
                        text="Clear"
                    />
                    <FormButton
                        color="error"
                        variant="contained"
                        onClick={handleDeleteAll}
                        text="Delete all"
                    />
                </div>

            </div>
        </form>
    );
};

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
};

export default TodoForm;
