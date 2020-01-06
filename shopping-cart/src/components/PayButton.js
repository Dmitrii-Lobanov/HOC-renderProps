import React from 'react';

function PayButton({ onPayClick }) {
  return (
  <button 
    type="button"
    className="cart-pay-button"
    onClick={() => onPayClick()}
  >
    Оплатить
  </button>
  )
}

export default PayButton;