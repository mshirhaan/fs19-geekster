import React, { useEffect, useState } from "react";

function Todos() {
  const [todo, setTodo] = useState(null);

  const [userInput, setUserInput] = useState(1);

  console.log("userinput", userInput);

  useEffect(() => {
    //only first time
  }, [userInput]);

  async function getTodo() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${userInput}`
    );
    setTodo(await res.json());
  }

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
