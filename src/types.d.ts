interface Todo {
  text: string;
  isComplete: boolean;
}

type onToggleTodo = (selectedTodo: Todo) => void;
