import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initislState = {
  todos: [
    {
      id: uuid(),
      name: 'Go to the gym',
      complete: false
    },
    {
      id: uuid(),
      name: 'Do laundry',
      complete: true
    }
  ]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  initislState,
  window.devToolsExtension && window.devToolsExtension()
);
