import { useCallback, useRef, useState } from "react";
import "./App.css";
import Name from "./Name";

function App() {
  const [name, setName] = useState("");

  const [age, setAge] = useState(0);

  const nameRef = useRef();

  const printName = useCallback(
    (name) => {
      return "Mr. " + name;
    },
    [name]
  );

  return (
    <div>
      <input type="text" ref={nameRef} />
      <button onClick={() => setName(nameRef.current.value)}>Save</button>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <Name naam={name} printName={printName} />
    </div>
  );
}

export default App;
