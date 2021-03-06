import React, { useState } from 'react';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    isComplete: false,
  },
  {
    text: 'Build app',
    isComplete: true,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const onToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return <TodoList todos={todos} onToggleTodo={onToggleTodo} />;
};

export default App;
