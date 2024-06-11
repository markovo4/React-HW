import {Link} from "react-router-dom";
import PageNotFound from "../../router/PageNotFound";

const Nav = () => {
    return (
        <nav>
            <Link to={'/'}>Home Page</Link>
            <Link to={'/login'}/>
            <Link to={'*'} element={<PageNotFound/>}/>
        </nav>
    )
}

export default Nav;