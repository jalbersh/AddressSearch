import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { addHistory } from '../actions/index'

export class AddressDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('in AddressDetail with address=', address)
        const props = this.props
        const address = props.address
        if (!address) {
            return (
              <div></div>
            )
        }
        let detail = ''
        if (address.length > 9) {
            detail = address
        } else {
            detail = 'No details'
        }
        console.log('in details with ' + address)
        return (
            <div>
            <div> detail - {detail} </div>
            </div>
        )
    }
}

export default AddressDetail;