export const addToCart = (id, count) => (
  {
    type: 'ADD_TO_CART',
    id,
    count
  }
);

export const removeFromCart = id => (
  {
    type: 'REMOVE_FROM_CART',
    id
  }
);

export const updateCartItem = (id, count) => (
  {
    type: 'UPDATE_CART_ITEM',
    id,
    count
  }
);

export const removeStockItem = (id, count) => (
  {
    type: 'REMOVE_STOCK_ITEM',
    id,
    count
  }
);

export const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
];