import {Fab, Typography} from "@mui/material";
import styles from './loginForm.module.scss';
import {useFormik} from "formik";
import validationSchema from "./validationSchema";
import {getCookies, setCookies} from "../../utils/functions/Cookies/index";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import FormInput from "../UI/FormInput";
import FormButton from "../UI/FormButton";
import routerNames from "../../router/RouterMapping/RouterNames";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const formInitValues = {
    login: '',
    password: '',
}

const LoginForm = () => {
    const {homePage: homePage} = routerNames;
    const [showPass, setShowPass] = useState(false)

    const navigation = useNavigate();
    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            setCookies('login', `${values.login}`, 0.01);
            setCookies('password', `${values.password}`, 0.01);
            setCookies('LoggedIn', 'true', 0.01);
            resetForm();
            navigation(homePage);
        }
    })

    useEffect(() => {
        if (window.location.pathname === '/login' && getCookies('LoggedIn')) {
            navigation(homePage)
        }
    }, [])

    const handleClick = () => {
        setShowPass(!showPass)
    }

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <Typography
                    variant={'h4'}
                    align={'center'}
                >
                    <b className={styles.bold}>Sign in</b>
                </Typography>

                <div className={styles.wrapper}>
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.login.trim()}
                        touched={formik.touched.login}
                        error={formik.errors.login}
                        label={'Login:'}
                        name={'login'}
                        id={'login'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.password.trim()}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label={'Password:'}
                        name={'password'}
                        id={'password'}
                        type={!showPass ? 'password' : 'text'}
                    />
                    <div className={styles.display}>
                        <Fab
                            onClick={handleClick}
                            size="small"
                            variant="extended"
                            color="secondary">
                            {showPass ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
                        </Fab>
                    </div>

                    <FormButton
                        color={'secondary'}
                        variant={'contained'}
                        text={'Log In'}
                        type={'submit'}
                    />

                </div>
            </form>
        </div>
    )
}

export default LoginForm;