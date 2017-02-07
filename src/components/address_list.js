import React, {Component} from 'react';
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AddressListItem from './address_list_item';
import { addHistory } from '../actions/index'

// export class AddressList extends Component {
//     constructor(props) {
//         super(props)
//     }
const AddressList = (props) => {
//      render() {
        console.log('in AddressList:render')
//        const props = this.props
        console.log('AddressList-addresses='+props.addresses)
        let addressItems = []
        if (props && props.addresses) {
                    addressItems = props.addresses.forEach((address) => {
                    console.log('in AddressList: address=' + address)
//                    if (address.length > 4) {
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
                    // } else {
                    //     let none = 'No History'
                    //     return (
                    //         < AddressListItem
                    //         key = {none}
                    //         address = {none} / >
                    //     )
                    // }
                })
        }
        return (
            < ul className = "col-md-4 list-group" >
            {addressItems}
            < / ul >
        )
// }
}

export default AddressList