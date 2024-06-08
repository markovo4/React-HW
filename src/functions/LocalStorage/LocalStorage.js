export function getNotes(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setNotes(key, notes) {
    return localStorage.setItem(key, JSON.stringify(notes));
}
