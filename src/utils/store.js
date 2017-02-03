import {connect} from 'react-redux'

const appContainer = document.getElementById('app')
const attr = {}

if (appContainer) {
    attr.dataError = appContainer.getAttribute('data-error')
    attr.dataMessage = appContainer.getAttribute("data-message")
}

export const connectStore = (Component, ...stores) => {
    return connect(store => {
        const newStore = stores.reduce((newStore, key) => {
            return {
                ...newStore,
                ...store[key]
            }
        }, {...attr})
        return {
            ...newStore,
            ...store.global
        }
    })(Component)
}