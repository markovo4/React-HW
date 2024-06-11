export function setCookies(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export function clearCookies(name) {
    setCookies(name, null, null)
}

export function getCookies(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');

    let result = null;
    cArray.forEach(element => {
        if (element.indexOf(name) === 0) {
            result = element.substring(name.length + 1)
        }
    })
    return result;
}