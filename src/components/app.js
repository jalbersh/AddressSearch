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
        address: [] ,
        selectedAddress: null
      }
      this.addressSearch('80403')
  }

  addressSearch(zip) {
        // do Address search here
      const dispatch={dispatch}
      let url = ZIPCODE_URL+API_KEY+ZIPCODE_URL_PT2+zip
      console.log('url='+url)
      // return Async.fetch(url)
      //         .then(() => {
      //         console.log('got data='+data)
      let data = "15193 W 63rd Ave, Arvada, CO, 80403"
      //dispatch({type: "SOME_ACTION", address: data})
      setState({address:data})
      // })
  }

  render() {

    const addressSearch = _.debounce((zip) => { this.addressSearch(zip) }, 300)
    return (
    	<div>
      		<SearchBar onSearchTermChange={addressSearch} />
      		<AddressDetail address={this.state.selectedAddress } dispatch />
      	    <AddressList
      	        onAddressSelect={selectedAddress => this.setState({selectedAddress})}
      	        addresses={this.state.addresses}
                dispatch
            />
      	</div>
    );
  }
}
