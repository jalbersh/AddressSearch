import moment from 'moment'

function getUtcTime() {
    return moment.utc()
}

export const defaultDateFormatter = date => {
    let formattedDate = moment(date).utc().format('MM/DD/YY')
    return (formattedDate === 'Invalid date') ? '' : formattedDate
}

export const isDateValid = date => {
    return moment(date).isValid()
}

export const formatDateRange = (fromDate, toDate) => {
    let formattedFromDate = defaultDateFormatter(fromDate)
    let formattedToDate = defaultDateFormatter(toDate)
    if (formattedFromDate && formattedToDate) {
        return `${formattedFromDate} - ${formattedToDate}`
    }
    return formattedFromDate || formattedToDate
}

export default {
    formatDateRange,
    getUtcTime,
    isDateValid,
    defaultDateFormatter
}