import { useState } from 'react';
import TodoItem from "./components/TodoItem";

function App() {

  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend from lunch",
    "Build a really cool todo app",
  ]);

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index} />
    ) )}
    </div>
  );
}

export default App;


// up to 6.2 pause to contemplate