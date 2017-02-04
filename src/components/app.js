import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import SearchFields from './search_fields';
import AddressList from './address_list'
import AddressDetail from './address_detail'
import Async from "../async/Async"

import {
    API_KEY, ADDRESS_URL, ADDRESS_URL_PT2, ADDRESS_URL_PT3, ZIPCODE_URL, ZIPCODE_URL_PT2,
    STREET, CITY, STATE, ZIP
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
      console.log('in addressSearch with '+zip)
        // do Address search here
      let url = ZIPCODE_URL+API_KEY+ZIPCODE_URL_PT2+zip
      console.log('url='+url)
      // return Async.fetch(url)
      //         .then(() => {
      //         console.log('got data='+data)
      let data = "15193 W 63rd Ave, Arvada, CO, 80403"
      this.setState( {
              zip: zip,
              addresses: [data],
              selectedAddress: data,
              address: data
            } )
      // })
      console.log('returning '+data)
      return data
  }

  render() {
    console.log('in render')
    const addressSearch = this.addressSearch(this.props.zip)
    // const addressSearch = _.debounce((address) => { this.addressSearch(this.props.zip) }, 300)
    //console.log('addressSearch = '+addressSearch)
    this.parseData(this.props.address)
    return (
    	<div>
      		<SearchFields onSearchTermChange={addressSearch} />
      		<AddressDetail address={this.state.selectedAddress } />
      	    <AddressList
      	        onAddressSelect={selectedAddress => this.setState({selectedAddress})}
      	        addresses={this.state.addresses}
            />
      	</div>
    );
  }

  parseData(data) {
      console.log('in parseData with '+data)
      if (data) {
          let parts = data.split(',')
          let ctr = 0
          parts.forEach(function (part) {
              switch (ctr) {
                  case STREET:
                      this.setState(street
                  :
                      part
                  )
                      ;
                      break;
                  case CITY:
                      this.setState(city
                  :
                      part
                  )
                      ;
                      break;
                  case STATE:
                      this.setState(state
                  :
                      part
                  )
                      ;
                      break;
                  case ZIP:
                      this.setState(zipcode
                  :
                      part
                  )
                      ;
                      break;
              }
              ctr++
          })
      }
  }
}
