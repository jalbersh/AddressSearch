export const padItems = (items, length) => {
    let numberLength = Number(length) || 0
    if (items.length >= numberLength) {
        return items;
    }
    return padItems(items.concat({}), numberLength)
}

export const joinStrings = (input, ...inputs) => {
    let stringified = input ? String(input) + ' ' : ''
    if (inputs.length) {
        return stringified + joinStrings(...inputs)
    }
    return stringified.trim()
}

export const getIn = (item, key, ...keys) => {
    if (keys.length) {
        return item && getIn(item[key], ...keys)
    }
    return item && item[key]
}

export const setNested = (object, value, ...keys) => {
    let newObject = {...object}
    let key = keys[0]
    if (keys.length > 1) {
        keys = keys.slice(1)
        newObject[key] = newObject[key] || {}
        newObject[key] = {...newObject[key], ...setNested(newObject[key], value, ...keys)}
        return newObject
    }
    newObject[key] = value
    return newObject
}

export const leftPad = (value, padded) => {
    const length = Math.max(String(padded).length, String(value).length)
    const output = `${padded}${value}`
    return output.slice(output.length - length)
}

export const range = (start = 0, stop = 0) => {
    if (start >= stop) return [start]
    return [start].concat(range(start + 1, stop))
}


export const capitalizeFirstLetter = initialValue => {
    if (initialValue) {
        let formattedValue = initialValue.toLowerCase().split('')
        formattedValue[0] = formattedValue[0].toUpperCase()
        return formattedValue.join('')
    }
    return initialValue
}

export const filterIfContains = (list, item, data) => {
    if (list.indexOf(item) === -1) {
        return data
    }
}