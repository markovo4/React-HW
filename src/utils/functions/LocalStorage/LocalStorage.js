import {DATA_KEY} from "../../constants/constants.js";

export function getTodos() {
    return JSON.parse(localStorage.getItem(DATA_KEY));
}

export function setTodos(notes) {
    return localStorage.setItem(DATA_KEY, JSON.stringify(notes));
}

export function clearTodos() {
    return localStorage.clear()
}