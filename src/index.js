import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';

// ReduxPromise examines all actions going by and if their payload is a promise, it waits on the 
// promise to be resolved and passes the answer on to the reducers
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
