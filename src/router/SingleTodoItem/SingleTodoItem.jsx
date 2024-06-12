import BaseTemplate from "../../templates/BaseTemplate";
import {useNavigate, useParams} from "react-router-dom";
import {getTodos, setTodos} from "../../utils/functions/LocalStorage";
import {useEffect, useMemo, useState} from "react";
import TodoItem from "../../components/TodoItem";
import ProgrammingNavigation from "../ProgrammingNavigation/index.js";

const SingleTodoItem = () => {
    const [todo, setTodo] = useState({});
    const [empty, setEmpty] = useState(false)
    const navigate = useNavigate();
    const DATA_KEY = 'data';


    const index = useParams().todoId;
    const todos = getTodos(DATA_KEY);

    const todoMap = useMemo(() => {
        const map = new Map();
        todos.forEach((todo) => {
            map.set(todo.itemId.toString(), todo);
        })
        return map
    }, [todos])


    useEffect(() => {
        const foundTodo = todoMap.get(index);
        if (foundTodo) {
            setTodo(foundTodo);
        }
    }, []);

    const handleDelete = (todoId) => () => {
        try {
            const filteredNotes = todos.filter((todo) => todo.itemId.toString() !== todoId);
            setTodos(DATA_KEY, filteredNotes)
            setEmpty(!empty)
            navigate('/')
        } catch (err) {
            console.dir('Failed to delete the note', err)
        }
    }
    return (
        <BaseTemplate>
            <ProgrammingNavigation/>
            {!empty && <TodoItem
                onDelete={handleDelete(index)}
                description={todo.description}
                id={parseInt(index)}
                title={todo.title}
            />}

        </BaseTemplate>
    )
}

export default SingleTodoItem;