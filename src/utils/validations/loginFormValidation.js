import * as Yup from 'yup';

const loginFormValidation = Yup.object({
    login: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .trim()
        .matches(/@/, 'You are missing @ ')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .trim()
        .required('Required')
})

export default loginFormValidation;