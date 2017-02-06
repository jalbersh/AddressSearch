import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import AddHistory from './add_history';
import AddressList from './address_list'
import AddressDetail from './address_detail'

export default class App extends Component {
  constructor(props) {
      super(props);
      var addr = document.getElementById('street').value
      var city = document.getElementById('city').value
      var state = document.getElementById('state').value
      var zip = document.getElementById('zip').value
      var full = addr+','+city+','+state+','+zip
      this.state = {
        address: full,
        addresses: [full] ,
        selectedAddress: full
      }
      console.log('past setting state with full=',full)
  }

  render() {
    return (
    	<div>
      		<AddHistory />
      		<AddressDetail address={this.state.selectedAddress } />
      	    <AddressList
      	        onAddressSelect={selectedAddress => this.setState({selectedAddress})}
      	        addresses={this.state.addresses}
            />
      	</div>
    );
  }
}
