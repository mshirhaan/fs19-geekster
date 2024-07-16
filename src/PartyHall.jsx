import React, { useEffect, useState } from "react";

function PartyHall() {
  const [partyNumber, setPartyNumber] = useState(1);
  useEffect(() => {
    console.log("New Party ON!");

    return () => {
      //runs before everytime useEffect runs but not first time and before component is destroyed
      console.log("CLEANING!");
    };
  }, [partyNumber]);

  console.log("PartyHall constructing");
  return (
    <div>
      <p>PartyHall</p>
      <p>Party number {partyNumber}</p>
      <button
        onClick={() => {
          setPartyNumber(partyNumber + 1);
        }}
      >
        End Party
      </button>
    </div>
  );
}

export default PartyHall;
