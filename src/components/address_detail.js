import React from 'react'
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { addHistory } from '../actions/index'
import new_address from '../reducers'

const AddressDetail = ({address}) => {
    console.log('in ADdressDetail with address=',address)
    if (!address) {
        return <div></div>
    }
    let detail = ''
    if (address.length>9) {
        detail = address
    } else {
        detail = 'No details'
    }
    console.log('in details with '+address)
    return (
        <div className="address-detail col-md-8">
            <div className="details">
                <div>{detail}</div>
            </div>
        </div>
    )
}

export default AddressDetail;