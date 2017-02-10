import { combineReducers } from 'redux';
import Addresses from './addresses';
import Address from './new_address';

const rootReducer = combineReducers({
	addresses: Addresses,
	address: Address
});

export default rootReducer;