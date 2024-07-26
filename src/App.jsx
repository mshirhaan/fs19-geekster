import TaskInput from "./components/Task/TaskInput/TaskInput";
import { useState } from "react";
import TaskCard from "./components/Task/TaskCard/TaskCard";
import TaskListCard from "./components/TaskList/TaskListCard/TaskListCard";

import styles from "./App.module.css";
import AddButton from "./components/AddButton/AddButton";
function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "TODO",
      tasks: [
        {
          id: 1,
          title: "Task 1",
        },
        {
          id: 2,
          title: "Task 2",
        },
      ],
    },
    {
      id: 2,
      title: "In progress",
      tasks: [
        {
          id: 6,
          title: "Task 6",
        },
      ],
    },
  ]);

  function onTaskMove(fromID, toID) {

  }

  function addList(title) {
    setLists([...lists, { id: lists.length + 1, title, tasks: [] }]);
  }

  function onAddTask(listId, taskTitle) {
    let newLists = lists.map((list) => {
      if (list.id !== listId) return list;
      list = {
        ...list,
        tasks: [...list.tasks, { id: list.tasks.length + 1, title: taskTitle }],
      };
      return list;
    });

    setLists(newLists);
  }

  const [showTaskInput, setShowTaskInput] = useState(false);

  const onEditTaskTitle = (listId, taskId, newTitle) => {
    let newLists = lists.map((list) => {
      if (list.id !== listId) return list;
      list = {
        ...list,
        tasks: list.tasks.map((task) => {
          if (task.id !== taskId) return task;
          task = { ...task, title: newTitle };
          return task;
        }),
      };
      return list;
    });

    setLists(newLists);
  };

  function onDeleteTask(listId, taskId) {
    let newLists = lists.map((list) => {
      if (list.id !== listId) return list;
      list = {
        ...list,
        tasks: list.tasks.filter((task) => task.id !== taskId),
      };
      return list;
    });
    setLists(newLists);
  }

  return (
    <div className={styles.taskListsContainer}>
      {lists.map((list) => (
        <TaskListCard
          listId={list.id}
          key={list.id}
          title={list.title}
          tasks={list.tasks}
          onEditTaskTitle={onEditTaskTitle}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
          onTaskMove
        />
      ))}

      {!showTaskInput ? (
        <AddButton
          title={"Add another list"}
          onClick={() => setShowTaskInput(true)}
        />
      ) : (
        <TaskInput
          sucessButtonTitle={"Add List"}
          title={""}
          onSuccess={addList}
          onCancel={() => setShowTaskInput(false)}
        />
      )}
    </div>
  );
}

export default App;
