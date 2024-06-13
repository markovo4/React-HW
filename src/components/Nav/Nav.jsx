import {Link} from "react-router-dom";
import PageNotFound from "../../router/PageNotFound";
import {useEffect, useState} from "react";
import {getTodos} from "../../utils/functions/LocalStorage";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import styles from './nav.module.scss';

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
        <BaseTemplateHeader>
            <nav className={styles.navigation}>
                <Link className={styles.link} to={'/'}>Home Page</Link>
                <Link className={styles.link} to={'/login'}/>
                <Link className={styles.link} to={'*'} element={<PageNotFound/>}/>
                <Link className={styles.link} to={'/todos'}>Todos</Link>
                {todos.map((todo, index) => {
                    return (<Link className={styles.hidden} key={index} to={`/todos/${index}`}/>)
                })}

                {todos.map((todo, index) => {
                    return (<Link className={styles.hidden} key={index} to={`/todosView/${index}`}/>)
                })}
            </nav>
        </BaseTemplateHeader>
    )
}

export default Nav;