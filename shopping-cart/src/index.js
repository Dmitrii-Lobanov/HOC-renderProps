import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducers from './reducers/reducers';
import stock from './data/products';

const initialState = {
  cart: [],
  stock: stock
}

const store = createStore(reducers, initialState);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
  document.getElementById('root')
);