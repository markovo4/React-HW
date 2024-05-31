import {Link} from "react-router-dom";
import {getInvoices} from '../../data/data.js';

const Nav = () => {
    const invoices = getInvoices();
    return (
        <nav className={'d-flex gap-3 container'}>
            <Link to={'/'}>Home Page</Link>
            <Link to={'/photos'}>Photos</Link>
            <Link to={'/invoices'}>Invoices</Link>

            {invoices.map((invoice, index) => {
                return (
                    <Link
                        to={`/invoices/${index}`}
                        key={index}>
                        {invoice.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav;