import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import catsReducer from './reducers/catsReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
