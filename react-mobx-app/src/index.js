import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from "mobx";
import './index.css';
import App from './App';

const appState = observable({
  count: 0
});

const Counter = props => {
  return (
    <div>{props}</div>
  )
}

ReactDOM.render(
  <Counter appState={appState} />,
  document.getElementById('root')
);