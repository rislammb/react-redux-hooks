import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onChange = event => {
    setTodo(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (todo.trim() === '') return;

    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: uuid(),
        name: todo,
        complete: false
      }
    });
    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-div'>
        <input
          type='text'
          name='todo'
          placeholder='Add a todo'
          value={todo}
          onChange={onChange}
        />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
