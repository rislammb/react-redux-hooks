import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = todoId =>
    dispatch({ type: 'TOGGLE_TODO', payload: todoId });
  const deleteTodo = todoId =>
    dispatch({ type: 'DELETE_TODO', payload: todoId });
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
          <span className='delete-btn' onClick={() => deleteTodo(todo.id)}>
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
