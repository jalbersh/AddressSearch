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
        const hr_style = {
            height: '10px',
            background: 'black',
	        border: '5px double',
            color: 'red'
        }
        const list_style = {
            border: '3px solid black',
            padding: '5px',
            float: 'left',
            fontSize: '30px',
            color: 'lightBlue',
            marginTop: '5px',
            fontStyle: 'normal',
            fontStretch: 'normal',
            textAlign: 'left',
            'list-style-type': 'none'
        }
        console.log('AddressList-addresses='+props.addresses)
        if (props.addresses) {
            let ctr=0
            return (
                    <div>
                    <h3>Address History</h3>
                    <hr style={hr_style}/>
                    <ul style={list_style}>
                            {props.addresses.map((address) => {
                                console.log('AddressList-address=',address)
                                return <li key={(++ctr).toString()}>{address}</li>
                            })}
                    </ul>
                    </div>
            )
        }
    }
}

export default AddressList

