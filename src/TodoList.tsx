import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  onToggleTodo: onToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return <TodoListItem key={todo.text} todo={todo} onToggleTodo={onToggleTodo} />;
      })}
    </ul>
  );
};
