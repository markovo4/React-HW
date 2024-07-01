export function getOrder(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function addOrder(key, notes) {
    return localStorage.setItem(key, JSON.stringify(notes));
}

export function removeOrder(key) {
    return localStorage.removeItem(key)
}