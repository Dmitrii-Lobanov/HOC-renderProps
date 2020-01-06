import React from 'react';

import CartItem from '../components/CartItem';

function CartItems({ cart, onQtyChange, onRemoveClick }) {
  if(!cart.length) {
    return <p className='empty-cart'>Корзина пуста</p>
  }

  return (
    <ul className='cart-items'>
      {cart.map(item => 
        <CartItem 
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.cover}
          count={item.count}
          stockCount={item.stockCount}
          onQtyChange={(e, id) => onQtyChange(e, id)}
          onRemoveClick={(e, id) => onRemoveClick(e, id)}
        />
      )}
    </ul>
  );
}

export default CartItems;