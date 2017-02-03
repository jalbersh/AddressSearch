import {getIn} from './dataHelpers'

const ENV = typeof window.getEnv === 'function' ? {...window.getEnv()} : {}

export const disableCards = page => () => {
    return getIn(ENV, 'disableCards', page) || []
}

export const getEnv = () => ({...ENV})

export const getBaseUrl = () => ENV.assetBaseUrl || ''

export const getEnvProfile = () => ENV.envProfile

export const isFeatureDisabled = feature => {
    let features = ENV.disableFeatures || []
    return features.indexOf(feature) >= 0
}

export const isFeatureDisabledByLocation = location => {
    let locationWithoutQueryParams = location.split('?')[0]
    let feature = locationWithoutQueryParams.replace(getBaseUrl(), '')

    return isFeatureDisabled(feature)
}

export const getPrimaryName = () => {
    let firstName = getIn(ENV, 'name', 'firstName') || ''
    let lastName = getIn(ENV, 'name', 'lastName') || ''
    return `${firstName} ${lastName}`
}

export default {
    disableCards,
    getBaseUrl,
    getEnv,
    getEnvProfile,
    isFeatureDisabled,
    isFeatureDisabledByLocation,
    getPrimaryName
}
