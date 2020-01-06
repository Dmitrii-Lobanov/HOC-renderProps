import React from 'react';

import ShopItem from './ShopItem';

function ShopItems({ items }) {
  if(!items.length) {
    return <p className='no-shop-items'>Товары отсутствуют</p>
  }
  
  return (
    <ul className='shop-item-list'>
      {items.map(item => 
        <ShopItem 
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.cover}
        />
      )}
    </ul>
  );
}

export default ShopItems;