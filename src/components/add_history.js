import React, {Component} from 'react';
import {connect} from 'react-redux'
import AddressList from './address_list'
import { addHistory } from'../actions/index'

    window.onload = () => {
        document.getElementById("history1").onclick = function fun() {
            addToHistory();
        }
    };

    function getAddress() {
        console.log('in getAddress')
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

    function addToHistory() {
        console.log('in search_fields:addToHistory')
        let fullAddress = getAddress()
        console.log('fullAddress='+fullAddress)
        console.log('calling addHistory')
        //this.props.dispatch({'NEW_ADDRESS':fullAddress})
        console.log('called')
        this.setState( {
              addresses: addresses.push(fullAddress),
              address: fullAddress
        } )
        console.log('done')
    };

class AddHistory extends Component {
    constructor(props) {
       super(props);
       console.log('props='+props);
       console.log('addresses='+this.props.addresses)
    }
    render() {
        let fullAddress = getAddress()
        return (
          <span>
          <button type="button" id='history1' >Add To History</button>
          </span>
        );
    }

}

function mapStateToProps(state) {
    console.log('in mapStateToProps')
	return {
		address: state.address
	};
}

function mapDispatchToProps(dispatch) {
    console.log('in mapDispatchToProps')
    return bindActionCreators({ address: address }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHistory);

export default AddHistory;
