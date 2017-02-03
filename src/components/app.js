import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import SearchBar from './search_bar';
import AddressList from './address_list'
import AddressDetail from './address_detail'
import Async from "../async/Async"

import {
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
        zip: 80403,
        address: null,
        addresses: [] ,
        selectedAddress: null
      }
      this.addressSearch('80403')
  }

  addressSearch(zip) {
        // do Address search here
      let url = ZIPCODE_URL+API_KEY+ZIPCODE_URL_PT2+zip
      console.log('url='+url)
      // return Async.fetch(url)
      //         .then(() => {
      //         console.log('got data='+data)
      let data = "15193 W 63rd Ave, Arvada, CO, 80403"
      this.setState( {
              addresses: data,
              selectedAddress: data,
              address: data
            } )
      // })
  }

  render() {
    const addressSearch = this.addressSearch(zip)
    console.log('addressSearch = '+addressSearch)
    return (
    	<div>
      		<SearchBar onSearchTermChange={addressSearch} />
      		<AddressDetail address={this.state.selectedAddress } />
      	    <AddressList
      	        onAddressSelect={selectedAddress => this.setState({selectedAddress})}
      	        addresses={this.state.addresses}
            />
      	</div>
    );
  }
}
