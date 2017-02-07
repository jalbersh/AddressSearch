import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import Addresses from './addresses';
import Address from './new_address';

const rootReducer = combineReducers({
	addresses: Addresses,
	routing: routerReducer,
	address: Address
});

export default rootReducer;