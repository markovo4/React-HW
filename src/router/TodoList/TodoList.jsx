import BaseTemplate from "../../templates/BaseTemplate";
import React, {useEffect, useState} from "react";
import {getTodos} from "../../utils/functions/LocalStorage";
import TodoItem from "../../components/TodoItem";
import styledList from './list.module.scss'
import styles from "../../components/TodoList/todoList.module.scss";
import ProgrammingNavigation from "../ProgrammingNavigation";
import BaseTemplateHeader from "../../templates/BaseTemplateHeader/index.js";
import Nav from "../../components/Nav/Nav.jsx";
import {isEmpty} from 'lodash';
import {Typography} from "@mui/material";

const TodoList = () => {
    const DATA_KEY = 'data';
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        setTodoList(getTodos(DATA_KEY))
    }, [])
    return (
        <React.Fragment>
            <BaseTemplateHeader>
                <Nav/>
                <ProgrammingNavigation/>
            </BaseTemplateHeader>

            <BaseTemplate>

                {isEmpty(todoList) &&
                    <Typography
                        variant={'h1'}
                        className={styledList.title}
                    ><b className={styledList.bold}>No ToDos were Added yet!</b></Typography>}

                <div className={styledList.container}>
                    <div className={styles.wrapper}>
                        {todoList.map((todo, index) => {
                                return (<TodoItem
                                    key={index}
                                    title={todo.title}
                                    description={todo.description}
                                    id={todo.itemId}
                                    view={true}
                                />)
                            }
                        )}
                    </div>
                </div>

            </BaseTemplate>
        </React.Fragment>
    )
}

export default TodoList;