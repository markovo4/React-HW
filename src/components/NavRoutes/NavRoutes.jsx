import {Route, Routes} from "react-router-dom";
import HomePage from "../../routes/HomePage";
import Notes from "../../routes/Notes";

const NavRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>

            <Route path={'notes'} element={<Notes/>}/>

            {/*<Route path={'notes/:'}*/}
        </Routes>
    )
}

export default NavRoutes;