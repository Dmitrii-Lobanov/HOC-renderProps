import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/actions';

var AddTodo = ({ dispatch }) => {
  var input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value))
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
AddTodo = connect()(AddTodo)

export default AddTodo;