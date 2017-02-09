import React, {Component} from 'react';
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AddressListItem from './address_list_item';
import { addHistory } from '../actions/index'

export class AddressList extends Component {
     constructor(props) {
         super(props)
     }
     render() {
        const props = this.props
        console.log('AddressList-addresses='+props.addresses)
        return (
                <div>
                <h3>Address History</h3>
                <hr />
                <ul>
                        {props.addresses.map((address) => {
                            console.log('AddressList-address=',address)
                            return <li>{address}</li>
                        })}
                </ul>
                </div>
        )
    }
}

export default AddressList

