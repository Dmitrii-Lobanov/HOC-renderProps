import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
// import HelloClass from './components/HelloClass';
import HelloFunc from './components/HelloFunc';
import StatefulHello from './components/StatefulHello';
import { enthusiasm } from "./reducers";
import { StoreState } from "./types/index";
import { EnthusiasmAction } from './actions';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Provider store={store}>
    {/* <HelloClass name="TypeScript" enthusiasmLevel={10} /> */}
    {/* <HelloFunc /> */}
    <StatefulHello name="Typescript" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
