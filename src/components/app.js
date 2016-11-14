import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

// if our app component ever has children
// and our user visits any of those children
// then app needs to be responsible for showing those children
