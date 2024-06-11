import {useNavigate} from "react-router-dom";
import {clearCookies, getCookies} from "../../utils/functions/Cookies/index.js";
import {useEffect} from "react";
import {Button} from '@mui/material';

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
        <Button
            color={'error'}
            variant={'contained'}
            onClick={handleClick}
        >Log Out</Button>
    )
}

export default ProgrammingNavigation;