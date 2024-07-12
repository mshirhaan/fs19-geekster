import React, { useEffect, useState } from "react";

function Todos() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    setTodo(await res.json());
  }

  if (todo == null) {
    return <p>Nothing here.</p>;
  }

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <input type="text" placeholder="Enter the id of Todo" />
      <div key={todo.id} style={{ width: "20%", border: "1px solid red" }}>
        <h1>{todo.title}</h1>
      </div>
    </div>
  );
}

export default Todos;
