import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import FontAwesome from '../node_modules/font-awesome/css/font-awesome.css';
import Styling from '../css/app.scss';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
    , document.getElementById('container'));
