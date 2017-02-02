import fetch from "isomorphic-fetch";
import * as marked from "marked";
import {Promise} from "es6-promise";
import importPathBuilder from '../browserUtils/pathBuilder'

window.fetch = window.fetch || fetch

function xhr(path, body, xhrMethod) {
    return new Promise((resolve, reject) => {
        const xhr = xhrMethod
        xhr.open("POST", path)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    resolve({})
                }
            }
        }
        xhr.send(body)
    })
}

function promisedFetch(path, options, handler) {
    return new Promise((resolve, reject) => {
        fetch(path, options)
            .then(response => {
                handler(resolve, reject, response)
            })
            .catch(response => {
                const errorMessage = `Request to ${path} got status ${response.status} with error "${response.statusText}"`
                reject(new Error(errorMessage))
            })
    })
}

function wrappedFetch(originalPath, options, fetch = window.fetch, xhrMethod =  XMLHttpRequest, pathBuilder = importPathBuilder) {
    const path = pathBuilder(originalPath, options.queryParams)

    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')

    const wrappedOptions = Object.assign({
        credentials: 'same-origin',
        headers: headers
    }, options)

    let promise
    if (wrappedOptions.method == 'POST') {
        promise = xhr(path, options.body, xhrMethod)
    } else {
        promise = new Promise((resolve, reject) => {
            fetch(path, wrappedOptions)
                .then(response => {
                    response.json()
                        .then(json => {
                            if (response.ok || response.status == 503) {
                                resolve(json)
                            } else {
                                reject(json)
                            }
                        })
                        .catch(err => {
                            const errorMessage = `Request to ${path} got status ${response.status} with error "${response.statusText}"`
                            reject(new Error(errorMessage))
                        })
                })
        })
    }

    return promise
}

function resolveWithServerErrorFetch(path, options={}, dispatch, fetch, xhrMethod = new XMLHttpRequest(), pathBuilder) {
    if (options && options.body) {
        if (typeof options.body !== 'string') {
            options.body = JSON.stringify(options.body)
        }
    }
    return wrappedFetch(path, options, fetch, xhrMethod, pathBuilder).catch(error => {
        //dispatch({type: SERVER_ERROR, error})
        throw error
    })
}

export default {
    fetch: resolveWithServerErrorFetch,
    marked: marked
}