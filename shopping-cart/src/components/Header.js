import React from 'react';
import { Link } from 'react-router-dom';

function Header({ children, cartItems, backButton, cartButton }) {
  const getBackButton = () => (
    <Link to='/' className='back-button'>
      &lt; Назад в магазин
    </Link>
  );

  const getCartButton = () => (
    <Link to='/cart' className='cart-button'>
      Корзина ({cartItems})
    </Link>
  );

  return (
    <div className="shopping-cart-app">
      <header className="header">
        <div className="header-contents">
          {backButton ? getBackButton() : ''}
          {cartButton ? getCartButton() : ''}
        </div>
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  );
}

export default Header;