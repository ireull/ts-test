import { FC } from 'react';
import { ITodoItem } from '../types/types';

export const TodoItem: FC<ITodoItem> = ({
  id,
  title,
  completed,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ display: 'inline-block', margin: '0 10px' }}>{title}</span>
      <button
        onClick={() => removeTodo(id)}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'red',
          cursor: 'pointer',
        }}
      >
        x
      </button>
    </div>
  );
};
