import {useNavigate} from "react-router-dom";
import {clearCookies, getCookies} from "../../utils/functions/Cookies/index.js";
import {useEffect} from "react";
import FormButton from "../../components/UI/FormButton.jsx";

const ProgrammingNavigation = () => {
    const navigation = useNavigate();
    
    useEffect(() => {
        if (window.location.pathname !== '/login' && !getCookies('LoggedIn')) {
            navigation('/login')
        }
    }, [])

    const handleClick = () => {
        clearCookies('login')
        clearCookies('password')
        clearCookies('LoggedIn')
        navigation('/login')
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