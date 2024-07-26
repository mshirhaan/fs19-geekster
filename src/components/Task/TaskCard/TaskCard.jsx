import React, { useEffect, useRef, useState } from "react";
import styles from "./TaskCard.module.css";
import TaskInput from "../TaskInput/TaskInput";

function TaskCard({ task, onEditTaskTitle, onDeleteTask }) {
  const [editing, setEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const taskCardRef = useRef(null);

  useEffect(() => {
    taskCardRef.current.addEventListener("mouseenter", () => {
      setIsHovered(true);
    });

    taskCardRef.current.addEventListener("mouseleave", () => {
      setIsHovered(false);
    });
  }, []);

  if (editing) {
    return (
      <TaskInput
        title={task.title}
        onSuccess={(newTitle) => {
          onEditTaskTitle(newTitle);
          setEditing(false);
        }}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <div className={styles.container} ref={taskCardRef} draggable={true}>
      <p>{task.title}</p>
      {isHovered && (
        <div className={styles.actions}>
          <button className={styles.actionBtn} onClick={() => setEditing(true)}>
            Edit
          </button>
          <button
            className={styles.actionBtn}
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
