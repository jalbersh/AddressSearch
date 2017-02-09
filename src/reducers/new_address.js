export default function (state = null, action) {
    switch(action.type) {
        case 'NEW_ADDRESS':
            console.log('in NEW_ADDRESS')
            return action.address
        case 'ADD_ADDRESS':
            console.log('in ADD_ADDRESS')
            let addr = action.address
            let addrs = []
            if (state) {
                addrs = state.addresses
                addrs.push(addr)
            } else {
                addrs = [addr]
            }
            return addrs
        default: return state
    }
	return state
}