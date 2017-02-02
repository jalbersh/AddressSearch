import _ from 'lodash'
import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import AddressList from './address_list'
import AddressDetail from './address_detail'
const API_KEY = 'AIzaSyBOO6cTkWz5Aag7Td_64ZXRP1eyPVNkz4Q'

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        address: [] ,
        selectedAddress: null
      }

      this.addressSearch('surfboards')
  }

  addressSearch(term) {
        YTSearch({key: API_KEY, term: term}, (addresses) => {
            this.setState( {
              addresses: addresses,
              selectedAddress: addresses[0]
            } )
        });
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
