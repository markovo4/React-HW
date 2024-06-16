import {useNavigate} from "react-router-dom";
import {clearCookies, getCookies} from "../../utils/functions/Cookies/index.js";
import {useEffect} from "react";
import FormButton from "../../components/UI/FormButton.jsx";
import routerNames from "../RouterMapping/RouterNames.js";

const ProgrammingNavigation = () => {
    const navigation = useNavigate();
    const {loginPage: loginPage} = routerNames;

    useEffect(() => {
        if (window.location.pathname !== '/login' && !getCookies('LoggedIn')) {
            navigation(loginPage)
        }
    }, [])

    const handleClick = () => {
        clearCookies('login')
        clearCookies('password')
        clearCookies('LoggedIn')
        navigation(loginPage)
    }
    return (
        <FormButton
            text={'Log Out'}
            color={'error'}
            variant={'contained'}
            onClick={handleClick}
        />
    )
}

export default ProgrammingNavigation;