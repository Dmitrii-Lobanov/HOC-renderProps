import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";
import App from 'components/App';
import Root from './components/Root';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);