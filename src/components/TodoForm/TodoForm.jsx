import FormInput from "../UI/FormInput.jsx";
import {useFormik} from "formik";
import styles from './todoForm.module.scss'
import {Button, FormGroup} from "@mui/material";

const formInitValues = {
    title: '',
    description: '',
}
const TodoForm = () => {
    const formik = useFormik({
        initialValues: {...formInitValues},
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            resetForm();
        }
    })
    return (
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
                    placeholder={'Description of To-Do...'}
                    className={styles.textArea}
                    onChange={formik.handleChange}
                    value={formik.values.description.trim()}
                />
            </FormGroup>

            <FormGroup>
                <Button color={'secondary'} variant={'outlined'}>Create To-Do</Button>
            </FormGroup>

            <FormGroup>
                <Button color={'warning'} variant={'outlined'}>Clear All Text-fields</Button>
            </FormGroup>

            <FormGroup>
                <Button color={'error'} variant={'outlined'}>Delete all to-dos</Button>
            </FormGroup>

        </div>
    )
}

export default TodoForm;