import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

window.ganesh = [];
function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const [age, setAge] = useState(0);

  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);

  // function printName() {
  //   return `Mr. ${firstName} ${secondName}`;
  // }

  const printName = useCallback(() => {
    return `Mr. ${firstName} ${secondName}`;
  }, [firstName, secondName]);

  window.ganesh.push(printName);

  return (
    <div>
      <input type="text" placeholder="first name" ref={firstNameRef} />

      <input type="text" placeholder="second name" ref={secondNameRef} />

      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />

      <button
        onClick={() => {
          setFirstName(firstNameRef.current.value);
          setSecondName(secondNameRef.current.value);
        }}
      >
        Save
      </button>

      <p>{printName()}</p>

      <p>Age: {age}</p>
    </div>
  );
}

export default App;
