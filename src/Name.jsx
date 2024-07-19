import React, { useEffect } from "react";

function Name({ naam, printName }) {
  console.log("running");

  useEffect(() => {
    console.log("running effect");
    console.log(printName(naam));
  }, [naam, printName]);

  return (
    <div>
      <p
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          padding: "10px",
        }}
      ></p>
    </div>
  );
}

export default Name;
