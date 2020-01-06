import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import Shop from './components/Shop';
import ItemContainer from './containers/AddItemContainer';
import CartContainer from './containers/CartContainer';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <HashRouter>
      <Route path='/' component={HeaderContainer} />
        <Route exact path='/' component={Shop} />
        <Route path='/item/:id' component={ItemContainer} />
        <Route path='/cart' component={CartContainer} />
        <Route path="*" component={NoMatch} />
    </HashRouter>
  );
}

export default App;
