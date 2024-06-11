import {Typography} from "@mui/material";
import styles from './todoList.module.scss'
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

const TodoList = () => {

    return (
        <div>
            <Typography
                className={styles.bold}
                variant={'h4'}
                align={'center'}
            >
                <b className={styles.bold}>CREATE TO-DO NOTE</b>
            </Typography>
            <div className={styles.container}>
                <TodoForm/>
                <div className={styles.wrapper}>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                </div>
            </div>
        </div>


    )
}

export default TodoList;