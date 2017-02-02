function getLocation() {
    return window.location.pathname
}

function getQueryString() {
    return window.location.search
}

function getQueryParams() {
    return window.location.search.substring(1).split("&").reduce((memo, param) => {
        const keyValue = param.split("=")
        const key = keyValue[0]
        const value = keyValue[1]
        memo[key] = value
        return memo
    }, {})
}

function goToLocation(path) {
    location.assign(path)
}

function scrollBy(x, y) {
    window.scrollBy(x, y)
}

function getBrowserDebugLogging() {
    return window.browserDebugLogging
}

function screenX() {
    return window.screenX
}

function screenY() {
    return window.screenY
}

function innerWidth() {
    return window.innerWidth
}

function open() {
    return window.open(...arguments)
}

function focus() {
    return window.focus()
}

function tearoutInfo() {
    return window.tearoutInfo
}

function addEventListener(event, eventHandler) {
    return window.addEventListener(event, eventHandler)
}

function setQueryParam(name, value) {
    const params = window.location.search.substring(1).split("&").map((param) => {
        const keyValue = param.split("=")
        if (keyValue[0] === name) {
            return `${name}=${value}`
        } else {
            return param
        }
    })

    window.location.search = `?${params.join('&')}`
}

function dispatchEvent(eventType) {
    window.dispatchEvent(new Event(eventType))
}

export default {
    getLocation,
    getQueryString,
    getQueryParams,
    goToLocation,
    scrollBy,
    getBrowserDebugLogging,
    screenX,
    screenY,
    innerWidth,
    open,
    focus,
    tearoutInfo,
    addEventListener,
    setQueryParam,
    dispatchEvent
}