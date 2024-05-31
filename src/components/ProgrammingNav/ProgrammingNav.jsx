import {useNavigate} from "react-router-dom";

const ProgrammingNav = () => {
    const navigation = useNavigate();

    const redirectUser = () => {
        navigation('/');
    }

    return (
        <button className={'btn btn-success'} onClick={redirectUser}>
            Click to go to home page!
        </button>
    )
}

export default ProgrammingNav;