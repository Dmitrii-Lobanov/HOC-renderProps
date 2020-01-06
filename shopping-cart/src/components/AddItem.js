import React, { useState } from 'react';
import Select from 'react-select';

import { options } from '../actions/actions';

const AddItem = ({ id, count, onSubmit }) => {
  const [selected, setSelected] = useState(1);
  
  if (!count) {
    return (
      <p className='item-sold-out'>
        Sold out!
      </p>
    );
  }

  const handleChangeSelected = selectedOption => {
    setSelected(selectedOption);
  }

  return (
    <form
      className='item-add-form'
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e, id);
      }}
    >
      <span className='item-qty-label'>
        Qty:
      </span>
      <Select
        value={selected}
        onChange={handleChangeSelected}
        options={options}
      />

      <button
        className='item-add-button'
        type='submit'
      >
        Add to cart
      </button>
    </form>
  );
};

export default AddItem;