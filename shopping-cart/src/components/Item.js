import React from 'react';

import AddItemContainer from '../containers/AddItemContainer';

function Item({ id, name, description, price, img }) {
  return (
    <div className={'item item-' + id}>
      <img className='item-image' src={img} />
      <div className='item-details'>
        <h1 className='item-name'>{name}</h1>
        <h2 className='item-price'>{price} рублей</h2>
        <p className='item-desc'>{description}</p>
        <AddItemContainer id={id} />
      </div>
    </div>
  );
}

export default Item;