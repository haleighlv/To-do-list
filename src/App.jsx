import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css';


function App() {

  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend from lunch",
    "Build a really cool todo app",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className="todo-list">My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;


// up to 6.2 pause to contemplate