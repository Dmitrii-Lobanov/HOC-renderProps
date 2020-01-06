import React from 'react';
import CartItems from './CartItems';
import Total from './Total';
import PayButton from './PayButton';

function Cart({ cart, onQtyChange, onRemoveClick, onPayClick }) {
  return (
    <div className="cart">
      <h1 className='main-header cart-header'>Моя корзина</h1>
      <CartItems 
        cart={cart}
        onQtyChange={onQtyChange}
        onRemoveClick={onRemoveClick}
      />
      <Total cart={cart} />
      <PayButton onPayClick={onPayClick} />
    </div>
  );
}

export default Cart;