import React from 'react';
import {connect} from 'react-redux';

import Item from '../components/Item';

const ItemContainer = connect((state, ownProps) => (
  state.stock.find(item => String(item.id) === ownProps.params.id)
)
)(Item);

export default ItemContainer;