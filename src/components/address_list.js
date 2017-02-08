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
        console.log('in AddressList:render')
        const props = this.props
        console.log('AddressList-addresses='+props.addresses)
        // const addressItems = props.addresses.forEach((address) => {
        //       console.log('in AddressList: address=' + address)
//              if (address.length > 4) {
//               return (
//                    <li>
//                    <div>
//                       {address}
//                     </div>
//                    </li>
//                )
               // } else {
               //     let none = 'No History'
               //     return (
               //         <AddressListItem
               //         address = {none} />
               //     )
               // }
        // })
        // console.log('AddressList-addressItems=',addressItems)
        // return (
        //     <ul>
        //    {addressItems}
        //     </ul>
        // )
        return (
                <ul>
                        {props.addresses.map((address) => {
                            console.log('AddressList-address=',address)
                            return <li>{address}</li>
                        })}
                </ul>
        )
    }
}

export default AddressList

