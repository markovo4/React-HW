import {Container} from "react-bootstrap";
import Nav from "./components/Nav";
import React from "react";
import RouterMapping from "./routes/RouterMapping/index.js";

function App() {

    return (
        <React.Fragment>
            Menu: <Nav/>
            <hr/>
            <h1 className={'text-center mt-5 mb-5'}>{'TODO LIST'}</h1>

            <Container>
                <RouterMapping/>
            </Container>
        </React.Fragment>
    )
}

export default App
