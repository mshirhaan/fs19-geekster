import React from "react";

function AddButton({ title, onClick }) {
  return <button onClick={onClick}>+{title}</button>;
}

export default AddButton;
