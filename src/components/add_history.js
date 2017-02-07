import React, {Component} from 'react';
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AddressList from './address_list'
import { addHistory } from '../actions/index'
import new_address from '../reducers'

    function getAddress() {
        console.log('in add_history:getAddress')
        let addr = document.getElementById('street').value
        let city = document.getElementById('city').value
        let state = document.getElementById('state').value
        let zip = document.getElementById('zip').value
        let fullAddress = ''
        if (addr != '' && city != '' && state != '' && zip != '') {
            fullAddress = addr+', '+city+', '+state+', '+zip
        }
        return fullAddress
    };

    function logger({ getState }) {
        return (next) => (action) => {
            console.log('will dispatch', action)
            let returnValue = next(action)
            console.log('state after dispatch', getState())
            return returnValue
        }
    }

class AddHistory extends Component {
    constructor(props) {
       super(props);
       console.log('props='+props);
       console.log('addresses='+this.props.addresses)
    }
    addToHistory() {
        console.log('in search_fields:addToHistory')
        let fullAddress = getAddress()
        console.log('fullAddress='+fullAddress)
        console.log('calling addHistory')
        console.log('called')
        let store = createStore(
            new_address,
            [ 'Use Redux' ],
            applyMiddleware(logger)
        )
        store.dispatch({
            type: 'ADD_ADDRESS',
            address: fullAddress
        })
        let list = []
        if (this.state && this.state.addresses) {
           list = this.state.addresses
        }
        list.push(fullAddress)
        this.setState({addresses: list})
        console.log('done')
    };
    render() {
        let fullAddress = getAddress()
        return (
            <span>
            <input type="button" value="Add to history" onClick={() => this.addToHistory(fullAddress)} />
            </span>
        );
    }

}

export default AddHistory;
