import React from 'react'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reduxPromise from 'redux-promise';
import stateValidator from 'middlewares/stateValidator';
import async from 'middlewares/async';
import logger from 'redux-logger'
import reducers from 'reducers';


export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator, logger)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}