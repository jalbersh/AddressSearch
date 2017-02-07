import React from 'react'
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { addHistory } from '../actions/index'
import new_address from '../reducers'

const AddressListItem = ({address, onAddressSelect}) => {
    const addressItem = address
    console.log('in addressListItem with '+addressItem)
    return (
        <li className="list-group-item">
            <div className="address-list media" >
                <div className="media-left">
                    {address}
                </div>
                <div className="media-body">
                    <div className="media-heading">{address}</div>
                </div>
            </div>
        </li>
    )
}

export default AddressListItem