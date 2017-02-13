/**
 *
 *
 * uncomment this section in production mode to automatically import bootstrap with glyphicons,
 * FontAwesome,
 * Your Sass css or you normal css
 * This Project can be used for any other Front End Project apart from react all you just have to
 * do is to let this page end as your entry point
 *
 *
 import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
 import FontAwesome from '../node_modules/font-awesome/css/font-awesome.css';
 import styling from '../css/app.scss';
 *
 *
 import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
 import FontAwesome from '../../node_modules/font-awesome/css/font-awesome.css';
 import styling from '../css/app.scss';
 *
 *
 *****/

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
    </Provider>
    , document.getElementById('container'));
