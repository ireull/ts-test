import { useRef, useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { ITodo } from './types/types';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);
      setValue('');
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <div className='App'>
      <div>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
