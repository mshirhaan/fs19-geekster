import React, { useEffect, useState } from "react";

function Todos() {
  const [todo, setTodo] = useState(null);

  const [userInput, setUserInput] = useState(1);

  useEffect(() => {
    //only after component finishes runs for first time
    fetch(`https://jsonplaceholder.typicode.com/todos/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  }, [userInput]);

  if (todo == null) {
    return <p>Nothing here.</p>;
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter the id of Todo"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div key={todo.id} style={{ width: "20%", border: "1px solid red" }}>
          <h1>{todo.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Todos;
