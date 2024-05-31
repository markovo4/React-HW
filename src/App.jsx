import Nav from "./components/Nav";
import NavRoutes from "./components/NavRoutes";

function App() {

    return (
        <>
            <h1>Bookkeeper!</h1>
            <Nav/>
            <div className={'container p-3'}>
                <NavRoutes/>
            </div>

        </>
    )
}

export default App
