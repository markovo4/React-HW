export function getTodos(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setTodos(key, notes) {
    return localStorage.setItem(key, JSON.stringify(notes));
}

export function clearTodos() {
    return localStorage.clear()
}