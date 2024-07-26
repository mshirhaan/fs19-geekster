import React, { useState } from "react";
import TaskCard from "../../Task/TaskCard/TaskCard";
import styles from "./TaskListCard.module.css";
import AddButton from "../../AddButton/AddButton";
import TaskInput from "../../Task/TaskInput/TaskInput";

function TaskListCard({
  listId,
  title,
  tasks,
  onEditTaskTitle,
  onDeleteTask,
  onAddTask,
}) {
  const [showTaskInput, setShowTaskInput] = useState(false);
  return (
    <div className={styles.container} draggable={true}>
      <h1>{title}</h1>
      <div className={styles.tasksContainer}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEditTaskTitle={(title) => {
              onEditTaskTitle(listId, task.id, title);
            }}
            onDeleteTask={() => {
              onDeleteTask(listId, task.id);
            }}
          />
        ))}

        {!showTaskInput ? (
          <AddButton
            title={"Add another card"}
            onClick={() => setShowTaskInput(true)}
          />
        ) : (
          <TaskInput
            sucessButtonTitle={"Add List"}
            title={""}
            onSuccess={(taskTitle) => {
              onAddTask(listId, taskTitle);
              setShowTaskInput(false);
            }}
            onCancel={() => setShowTaskInput(false)}
          />
        )}
      </div>
    </div>
  );
}

export default TaskListCard;
