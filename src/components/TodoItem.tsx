import React from 'react';

const TodoItem: React.FC<{
  id: number;
  text: string;
  onRemoveClick: (todoId: number) => void;
}> = (props) => {
  return <li onClick={() => props.onRemoveClick(props.id)}>{props.text}</li>;
};

export default TodoItem;
