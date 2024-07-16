import React, { useState } from "react";
import Modal from "./Modal";

function Card({ todo, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal ? (
        <Modal
          onCancel={() => {
            setShowModal(false);
          }}
          onDelete={() => {
            onDelete(todo);
            setShowModal(false);
          }}
          todo={todo}
        />
      ) : null}
      <div
        onClick={() => {
          setShowModal(true);
        }}
        style={{ width: "200px", height: "200px", border: "2px solid red" }}
      >
        {todo.title}
      </div>
    </div>
  );
}

export default Card;
