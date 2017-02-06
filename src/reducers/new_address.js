export default function (state = null, action) {
    console.log('in new_address')
    switch(action.type) {
        case 'NEW_ADDRESS':
            return action.payload
    }
	return state
}