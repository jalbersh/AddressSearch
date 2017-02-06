export default function (state = null, action) {
    switch(action.type) {
        case 'NEW_ADDRESS':
            return action.payload
    }
	return state
}