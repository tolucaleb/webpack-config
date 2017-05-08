import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import configureStore from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../css/app.scss';

const store = configureStore();
render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
    , document.getElementById('container'));


if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
    , document.getElementById('container'));
  });
}

