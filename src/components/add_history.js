import React, {Component} from 'react';
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AddressList from './address_list'
import { addHistory } from '../actions/index'
import new_address from '../reducers'
import addresses from '../reducers'
import toastr from 'toastr'

    function getAddress() {
        console.log('in AddHistory:getAddress')
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
       console.log('AddHistory-props-addresses='+this.props.addresses)
    }
    inList(list,element) {
        let found=false
        if (list) {
            list.map((address) => {
                if (address == element) {
                    found = true
                }
            })
        }
        return found
    }
    addToHistory() {
        console.log('in AddHistory:addToHistory')
        let fullAddress = getAddress()
        console.log('fullAddress='+fullAddress)
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
        if (!this.inList(list,fullAddress)) {
            toastr['success']('A new address has been added to history!!!');
            list.push(fullAddress)
        }
        this.setState({addresses: list})
    }
    render() {
        let addrs = []
        if (this.props && this.props.addresses) {
            console.log('props addresses=',this.props.addresses)
            addrs = this.props.addresses
        }
        if (this.state && this.state.addresses) {
            console.log('state addresses=',this.state.addresses)
            addrs = this.state.addresses
        }
        let fullAddress = getAddress()
        return (
            <span>
            <input type="button" value="Add to history" onClick={() => this.addToHistory()} />
            <AddressList
                addresses={addrs}
            />
            </span>
        );
    }

}

export default AddHistory;
