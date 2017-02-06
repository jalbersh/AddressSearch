import React, {Component} from 'react';
import {connect} from 'react-redux'
import AddressList from './address_list'
import { addHistory } from'../actions/index'

    function getAddress() {
        console.log('in add_history:getAddress')
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

class AddHistory extends Component {
    constructor(props) {
       super(props);
       console.log('props='+props);
       console.log('addresses='+this.props.addresses)
    }
    addToHistory() {
        console.log('in search_fields:addToHistory1')
        let fullAddress = getAddress()
        console.log('fullAddress='+fullAddress)
        console.log('calling addHistory')
        console.log('called')
        this.setState({address: fullAddress})
        let list = []
        if (this.state && this.state.addresses) {
            list = this.state.addresses
        }
        list.push(fullAddress)
        this.setState({addresses: list})
        console.log('done')
    };
    render() {
        let fullAddress = getAddress()
        return (
          <span>
          <input type="button" value="Add to history" onClick={() => this.addToHistory(fullAddress)} />
          </span>
        );
    }

}

// function mapStateToProps(state) {
//     console.log('in mapStateToProps')
// 	return {
// 		address: state.address
// 	};
// }
//
// function mapDispatchToProps(dispatch) {
//     console.log('in mapDispatchToProps')
//     return bindActionCreators({ address: address }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddHistory);

export default AddHistory;
