import { useState } from "react";
import "./App.css";
import PartyHall from "./PartyHall";

function App() {
  //I am the governement

  const [isPartyAllowed, setPartyAllowed] = useState(true);
  return (
    <div>
      {isPartyAllowed ? <PartyHall /> : null}

      <button
        onClick={() => {
          setPartyAllowed(false);
        }}
        style={{ marginTop: "2rem" }}
      >
        Ban Party
      </button>
    </div>
  );
}

export default App;
