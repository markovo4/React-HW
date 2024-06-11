import * as Yup from 'yup';

const validationSchema = Yup.object({
    login: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .trim()
        .required('Required'),
    password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .trim()
        .required('Required')
})

export default validationSchema;