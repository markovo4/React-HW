import {Route, Routes} from "react-router-dom";

import HomePage from "../../routes/HomePage.jsx";
import Invoices from "../../routes/Invoices.jsx";
import Photos from "../../routes/Photos.jsx";
import SingleInvoice from "../../routes/SingleInvoice.jsx";

const NavRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'invoices'} element={<Invoices/>}/>
            <Route path={'photos'} element={<Photos/>}/>
            <Route path={'invoices/:invoiceId'} element={<SingleInvoice/>}/>
            <Route path={'*'} element={<div>There is nothing Here!</div>}/>
        </Routes>
    )
}

export default NavRoutes;