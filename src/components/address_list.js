import React from 'react';
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AddressListItem from './address_list_item';
import { addHistory } from '../actions/index'
import new_address from '../reducers'

const AddressList = (props) => {
    const addressItems = props.addresses.forEach((address) => {
        console.log('in AddressList: address='+address)
        if (address.length > 9) {
            return (
                <AddressListItem
                    key={address}
                    address={address} />
            )
        } else {
            let none='No History'
            return (
                <AddressListItem
                    key={none}
                    address={none} />
            )
        }
    })
    return (
        <ul className="col-md-4 list-group">
          {addressItems}
        </ul>
    )
}

export default AddressList