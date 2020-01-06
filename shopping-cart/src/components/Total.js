import React from 'react';

function Total({ cart }) {
  return (
    <div className='cart-total'>
      <span className='cart-total-label'>Итого:</span>
      <span className='cart-total-value'>
        {cart.length ? cart.reduce((acc, curr) => (
          acc + curr.price * DataTransferItem.count
        ), 0) : Number(0)}
      </span>
    </div>
  );
}

export default Total;