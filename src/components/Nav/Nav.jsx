import BaseTemplate from "../../templates/BaseTemplate";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <BaseTemplate.Header>
            <nav>
                <Link to={'/'}>Home Page</Link>
                <Link to={'/ordersList'}>My Orders</Link>
            </nav>
        </BaseTemplate.Header>
    )
}

export default Nav;