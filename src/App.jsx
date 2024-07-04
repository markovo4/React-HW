import RouterMapping from "./routes/router";
import {SnackbarProvider} from "notistack";


function App() {
    return (
        <SnackbarProvider maxSnack={2}>
            <RouterMapping/>
        </SnackbarProvider>
    )
}

export default App
