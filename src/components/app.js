import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AddHistory from './add_history';
import { addHistory } from '../actions/index'
import new_address from '../reducers'

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        address: '',
        addresses: []
      }
  }

  render() {
      return (
    	<div>
      		<AddHistory />
      	</div>
    );
  }
}
