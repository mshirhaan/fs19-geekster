import { useEffect, useRef, useState } from "react";
import "./App.css";

//example with refs
function App() {
  const [name, setName] = useState("");
  const ref = useRef(null);

  return (
    <div>
      <input ref={ref} type="text" placeholder="enter your name" />
      <button
        onClick={() => {
          setName(ref.current.value);
        }}
      >
        Submit
      </button>
      {name ? <p>Hello {name}</p> : <p>Hello Geekster</p>}
    </div>
  );
}

export default App;
