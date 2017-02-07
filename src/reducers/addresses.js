export default function addresses(state = null, action) {
	console.log('in addresses reducer')
	return [
		{ address: '11932 W 56th Cir, Arvada, CO, 80002' },
		{ address: '1440 Bellevue Dr, Boulder, CO, 80302' }
	]
}