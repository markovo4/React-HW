import RouterMapping from "./routes/router/RouterMapping";
import {SnackbarProvider} from "notistack";
import AuthCheck from "./components/AuthCheck";

function App() {

    return (
        <AuthCheck>
            <SnackbarProvider maxSnack={2}>
                <RouterMapping/>
            </SnackbarProvider>
        </AuthCheck>
    )
}

export default App
