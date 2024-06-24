import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/router/RouterMapping/RouterNames.js";
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import Cookies from "js-cookie";

const LogoutButton = () => {
    const navigation = useNavigate();
    const {loginPage: loginPage} = routerNames;

    // useEffect(() => {
    //     if (window.location.pathname !== loginPage && !Cookies.get('LoggedIn')) {
    //         navigation(loginPage);
    //     }
    // }, []);

    const handleClick = () => {
        Cookies.remove('LoggedIn')
        navigation(loginPage)
    }
    return (
        <BaseTemplate.Header>
            <Button
                color={'error'}
                variant={'contained'}
                onClick={handleClick}
                startIcon={<LogoutIcon/>}
            >Log Out</Button>
        </BaseTemplate.Header>
    )
}

export default LogoutButton;