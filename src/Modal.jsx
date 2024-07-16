import React, { useEffect } from "react";

function Modal({ todo, onDelete, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDelete();
    }, 10000);

    //cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        left: "50%",
        top: "20%",
        transform: "translate(-50%, -20%)",
        height: "30vh",
        width: "80vw",
        zIndex: 1,
        position: "absolute",
        background: "gray",
      }}
    >
      <p>Do you want to delete {todo.title} pakka?</p>
      <button onClick={onDelete}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}

export default Modal;
