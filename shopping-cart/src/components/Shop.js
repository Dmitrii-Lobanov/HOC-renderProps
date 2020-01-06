import React from 'react';

import ShopItemsContainer from '../containers/ShopItemsContainer';

function Shop() {
  return (
    <div className='shop'>
      <h1 className='main-header shop-header'>Онлайн магазин</h1>
      <ShopItemsContainer />
    </div>
  );
}

export default Shop;