import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getTodos} from "../../utils/functions/LocalStorage";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader";
import styles from './nav.module.scss';

const Nav = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosList = getTodos() || []
        setTodos(todosList);
    }, []);

    return (
        <BaseTemplateHeader>
            <nav className={styles.navigation}>
                <Link className={styles.link} to="/">Home Page</Link>
                <Link className={styles.hidden} to="/login"/>
                <Link className={styles.hidden} to="*"/>
                <Link className={styles.link} to="/todos">Todos</Link>

                {todos.map((todo, index) => (
                    <React.Fragment key={index}>
                        <Link className={styles.hidden} to={`/todos/${index}`}/>
                        <Link className={styles.hidden} to={`/todosView/${index}`}/>
                    </React.Fragment>
                ))}
            </nav>
        </BaseTemplateHeader>
    );
};

export default Nav;
