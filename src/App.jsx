import React from 'react';
import Nav from "./components/Nav";
import {Container} from "@mui/material";
import RouterMapping from "./router/RouterMapping/RouterMapping.jsx";

function App() {

    return (
        <React.Fragment>
            <Nav/>

            <Container>
                <RouterMapping/>
            </Container>
        </React.Fragment>
    )
}

export default App
