import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

// Router is the top level object. It listens to see where the url is
// Its then going to tell it's child route to re render with a differnt component
// browserHistory is what tells Router how to keep track of the current url

import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <Route path="/resources" component={Resources}></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
