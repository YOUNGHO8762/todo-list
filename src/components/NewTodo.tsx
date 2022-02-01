import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { todoActions } from '../store/todo-slice';

const NewTodo: React.FC = () => {
  const dispatch = useDispatch();

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const id = new Date().getTime();
    const text = todoTextInputRef.current!.value;

    if (text.trim().length === 0) {
      return;
    }

    dispatch(todoActions.addTodo({ id, text }));
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
