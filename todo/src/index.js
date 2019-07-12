import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import todos from "./reducers"

// creating store for todos to populate
const store = createStore(todos)

ReactDOM.render(
// Adding prodvider as high function 
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
