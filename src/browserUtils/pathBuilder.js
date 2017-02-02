import env from '../utils/env'
import windowHelper from './windowHelper'

function stringifyParams(params) {
    return Object.keys(params).map(key => {
        return `${key}=${params[key]}`
    }).join('&')
}

export default function pathBuilder(path, queryParams = {}) {
    const baseUrl = env.getBaseUrl() || ''

    const allParams = {
        ...windowHelper.getQueryParams(),
        ...queryParams
    }

    const queryString = Object.keys(allParams).length === 0 ? '' : '?' + stringifyParams(allParams)


    return `${baseUrl}${path}${queryString}`
}