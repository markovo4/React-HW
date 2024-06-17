import {useNavigate} from "react-router-dom";
import {clearCookies, getCookies} from "../../utils/functions/Cookies/index.js";
import {useEffect} from "react";
import routerNames from "../RouterMapping/RouterNames.js";
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from "@mui/material";

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
        <Button
            color={'error'}
            variant={'contained'}
            onClick={handleClick}
            startIcon={<LogoutIcon/>}
        >Log Out</Button>
    )
}

export default ProgrammingNavigation;