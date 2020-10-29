import React from 'react'
import ReactDOM from 'react-dom'
import { observable, configure, action } from "mobx";
import { observer } from "mobx-react";
// import DevTools from 'mobx-react-devtools'
// import makeInspectable from 'mobx-devtools-mst'

configure({ enforceActions: "always" });

const appState = observable({
  count: 0,
  increment: action("Increment counter", () => {
    appState.count += 1
  }),
  decrement: action("Decrement counter", () => {
    appState.count -= 1
  }),
  get countByThree() {
    return this.count * 3;
  },
  get countByFour() {
    return this.count * 4;
  }
});

const Counter = observer(props => {
  return (
    <section>
      {props.appState.count}
      <div>
        <button onClick={props.appState.increment}>Add</button>
        <button onClick={props.appState.decrement}>Decrement</button>
      </div>
        {/* <DevTools /> */}
        <div>Count By three {props.appState.countByThree}</div>
        <div>Count By Four {props.appState.countByFour}</div>
    </section>
  )
});

ReactDOM.render(
  <Counter appState={appState} />,
  document.getElementById('root')
);