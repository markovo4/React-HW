import React from 'react';
import RouterMapping from "./routes/router/RouterMapping/RouterMapping.jsx";
import {SnackbarProvider} from "notistack";

function App() {

    return (
        <React.Fragment>
            <SnackbarProvider maxSnack={2}>
                <RouterMapping/>
            </SnackbarProvider>
        </React.Fragment>
    )
}

export default App
