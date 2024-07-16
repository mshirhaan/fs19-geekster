import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "cycling" },
    { id: 2, title: "teaching" },
    { id: 3, title: "coding" },
  ]);

  function onDelete(todo) {
    let newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  }
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {todos.map((todo) => (
        <Card todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default App;
