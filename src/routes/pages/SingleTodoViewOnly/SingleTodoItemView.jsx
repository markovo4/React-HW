import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getTodos} from "../../../utils/functions/LocalStorage";
import {Typography} from "@mui/material";
import styles from './singleTodoItem.module.scss';
import FormSelect from "../../../components/UI/FormSelect";
import Nav from "../../../components/Nav";
import LogoutButton from "../../../components/LogoutButton";
import BaseTemplate from "../../../templates/BaseTemplate";

const SingleTodoItemView = () => {
    const [todoView, setTodoView] = useState({});
    const [status, setStatus] = useState('Not-Completed');

    const {todoId} = useParams();
    const todos = getTodos();


    useEffect(() => {
        const foundTodo = todos.find(todo => todo.itemId.toString() === todoId) || {
            title: '',
            description: '',
            status: 'Not-Completed'
        }
        if (foundTodo) {
            setTodoView(foundTodo);
            setStatus(foundTodo.status || 'Not-Completed');
        }
    }, [todoId]);

    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav/>
                <LogoutButton/>
            </BaseTemplate.Header>

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Typography variant="h5">
                        {todoView.title}
                    </Typography>
                    <hr className={styles.separatorHor}/>
                    <Typography variant="body1">
                        {todoView.description}
                    </Typography>
                    <hr className={styles.separatorHor}/>
                    <div className={styles.checkBoxGroup}>
                        <FormSelect
                            view={true}
                            status={status}
                            id={todoId.toString()}
                        />
                    </div>
                </div>
            </div>
        </BaseTemplate>
    );
};

export default SingleTodoItemView;
