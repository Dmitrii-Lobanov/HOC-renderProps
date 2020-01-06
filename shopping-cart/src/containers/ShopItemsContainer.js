import { connect } from 'react-redux';

import ShopItems from '../components/ShopItems';

const ShopItemsContainer = connect(state => (
  {
    items: state.stock
  }
))(ShopItems);

export default ShopItemsContainer;