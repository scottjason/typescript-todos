import React from 'react';

interface Props {
  todo: Todo;
  onToggleTodo: onToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, onToggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.isComplete ? 'line-through' : undefined }}
      >
        <input type='checkbox'
          readOnly
          data-testid={todo.text}
          checked={todo.isComplete}
          onClick={() => {onToggleTodo(todo);}} />
          {todo.text}
      </label>
    </li>
  );
};
