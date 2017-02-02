function getItem(key) {
    return sessionStorage.getItem(key)
}

function setItem(key, data) {
    sessionStorage.setItem(key, data)
}

function removeItem(key) {
    sessionStorage.removeItem(key)
}

export default {
    getItem,
    setItem,
    removeItem
}