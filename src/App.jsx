import {Container, Nav} from "react-bootstrap";
import React from "react";
import NavRoutes from "./components/NavRoutes";

function App() {

    return (
        <React.Fragment>
            Menu: <Nav/>
            <hr/>
            <h1 className={'text-center mt-5 mb-5'}>{'TODO LIST'}</h1>

            <Container>

                <NavRoutes/>
            </Container>
        </React.Fragment>
    )
}

export default App
