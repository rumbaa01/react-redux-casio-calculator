import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import { App } from './features/main';
import configureStore from './features/redux/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
