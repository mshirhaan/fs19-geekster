import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/TodosBeta";

function App() {
  const [userInput, setUserInput] = useState(1);

  console.log("running");

  useEffect(() => {
    console.log("running useEffect");
  });

  return (
    <div>
      <input
        type="number"
        placeholder="Enter the id of Todo"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
