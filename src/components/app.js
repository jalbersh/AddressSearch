import _ from 'lodash'
import React, { Component } from 'react';
import SearchBar from './search_bar';
import AddressList from './address_list'
import AddressDetail from './address_detail'
import import {
    API_KEY,
    ADDRESS_URL,
    ADDRESS_URL_PT2,
    ADDRESS_URL_PT3,
    ZIPCODE_URL,
    ZIPCODE_URL_PT2
} from '../constants/constants'

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        address: [] ,
        selectedAddress: null
      }

      this.addressSearch('80403')
  }

  addressSearch(zip) {
        // do Address search here
      return Async.fetch(ZIPCODE_URL+API_KEY+ZIPCODE_URL_PT2+zip)
              .then(() => {
              console.log('got data='+data)
      //dispatch({type: SOME_ACTION, data: some_data})
  })}

  render() {

    const addressSearch = _.debounce((zip) => { this.addressSearch(zip) }, 300)
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
