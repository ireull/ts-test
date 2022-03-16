import React, { FC } from 'react';
import { ITodoList } from '../types/types';
import { TodoItem } from './TodoItem';

export const TodoList: FC<ITodoList> = ({ items, removeTodo, toggleTodo }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};
