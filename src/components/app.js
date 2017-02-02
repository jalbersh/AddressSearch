import _ from 'lodash'
import React, { Component } from 'react';
import SearchBar from './search_bar';
import AddressList from './address_list'
import AddressDetail from './address_detail'

const API_KEY = '1990333215773402'
const ADDRESS_URL = 'https://us-street.api.smartystreets.com/street-address?auth-id='
const ADDRESS_URL_PT2 = '&candidates=10&street='
const ADDRESS_URL_PT3 = '&city=&state-&zipcode-'
const ZIPCODE_URL = 'https://us-zipcode.api.smartystreets.com/lookup?auth-id='
const ZIPCODE_URL_PT2 = '&city=&state-&zipcode='

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        address: [] ,
        selectedAddress: null
      }

      this.addressSearch('')
  }

  addressSearch(term) {
        // do Address search here
  }

  render() {

    const addressSearch = _.debounce((term) => { this.addressSearch(term) }, 300)
    return (
    	<div>
      		<SearchBar onSearchTermChange={addressSearch} />
      		<AddressDetail address={this.state.selectedAddress } />
      	    <AddressList
      	        onAddressSelect={selectedAddress => this.setState({selectedAddress})}
      	        addresses={this.state.addresses} />
      	</div>
    );
  }
}
