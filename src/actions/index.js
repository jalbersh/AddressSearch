export function addHistory(address) {
    console.log('in addHistory action')
    return {
        type: 'NEW_ADDRESS',
        payload: address
    }
}