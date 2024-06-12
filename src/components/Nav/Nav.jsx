import {Link} from "react-router-dom";
import PageNotFound from "../../router/PageNotFound";
import {useEffect, useState} from "react";
import {getTodos} from "../../utils/functions/LocalStorage/index.js";

const Nav = () => {
    const [todos, setTodos] = useState([]);
    const DATA_KEY = 'data';
    useEffect(() => {
        const fetchTodos = () => {
            setTodos(getTodos(DATA_KEY))
        }

        const intervalId = setInterval(() => {
            fetchTodos();
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <nav>
            <Link to={'/'}>Home Page</Link>
            <Link to={'/login'}/>
            <Link to={'*'} element={<PageNotFound/>}/>
            {todos.map((todo, index) => {
                return (<Link key={index} to={`/todos/${index}`}/>)
            })}
        </nav>
    )
}

export default Nav;