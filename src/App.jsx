import TodoList from "./components/TodoList";
import {Container} from "react-bootstrap";

function App() {

    return (
        <main>
            <h1 className={'text-center mt-5 mb-5'}>{'TODO LIST'}</h1>
            <Container>
                <TodoList/>
            </Container>
        </main>
    )
}

export default App
