import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { addHistory } from '../actions/index'

export class AddressListItem extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            const props = this.props
            const addressItem = props.address
            console.log('in addressListItem with ' + addressItem)
            return (
                <li>
                <div>
                {address}
                </div>
                </li>
            )
        }
}

export default AddressListItem