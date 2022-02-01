import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { todoActions } from '../store/todo-slice';
import TodoItem from './TodoItem';

const Todos: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo);
  const handleRemoveClick = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveClick={handleRemoveClick}
        />
      ))}
    </ul>
  );
};

export default Todos;
