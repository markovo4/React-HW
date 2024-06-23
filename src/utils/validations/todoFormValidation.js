import * as Yup from 'yup';

const todoFormValidation = Yup.object({
    title: Yup.string()
        .trim()
        .required('Required'),
    description: Yup.string()
        .trim()
        .required('Required')
})

export default todoFormValidation;