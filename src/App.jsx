import { useEffect, useState } from "react";
import "./App.css";


//Example using 2 way binding
function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
    
      {name ? <p>Hello {name}</p> : <p>Hello Geekster</p>}
    </div>
  );
}

export default App;
