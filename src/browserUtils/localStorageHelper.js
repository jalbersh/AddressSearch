function getItem(key) {
    return localStorage.getItem(key)
}

function setItem(key, data) {
    localStorage.setItem(key, data)
}

export default {
    getItem,
    setItem
}