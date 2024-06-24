import {useEffect} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const AuthCheck = ({children}) => {
    const redirect = useNavigate();

    useEffect(() => {
        if (!Cookies.get('LoggedIn')) {
            redirect('/login');
        } else if (window.location.pathname === '/login' && Cookies.get('LoggedIn')) {
            redirect('/');
        }
    }, [])

    return children;
}

export default AuthCheck;