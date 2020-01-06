import React from 'react';
import { Link } from 'react-router-dom';

function ShopItem({ id, name, price, img }) {
  return (
    <li className={'shop-item shop-item-' + id}>
      <Link to={'/item/' + id}>
        <div className='shop-item-container'>
          <img className='shop-item-image' src={img} alt={img} />
          <h1 className='shop-item-name'>{name}</h1>
          <h2 className='shop-item-price'>{price} рублей</h2>
        </div>
      </Link>
    </li>
  );
}

export default ShopItem;