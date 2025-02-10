import { CiMenuKebab } from "react-icons/ci";
import { useDarkMode } from "./context/DarkModeContext";
import "../styles/Task.css";
import "../styles/TaskBoard.css";
import { useState } from "react";

const Task = () => {
  const { darkMode } = useDarkMode();
  const initialTasks = {
    todo: [
      { id: 1, title: "Build settings UI", subtasks: 2, completedSubtasks: 1 },
      { id: 2, title: "QA and test all major user journeys", subtasks: 2, completedSubtasks: 0 },
      { id: 3, title: "Take coffee break", subtasks: 1, completedSubtasks: 1 }
    ],
    doing: [
      { id: 4, title: "Design settings and search pages", subtasks: 3, completedSubtasks: 2 },
      { id: 5, title: "Add account management endpoints", subtasks: 3, completedSubtasks: 2 }
    ],
    done: [
      { id: 6, title: "Conduct 5 wireframe tests", subtasks: 1, completedSubtasks: 1 },
      { id: 7, title: "Review results and iterate", subtasks: 2, completedSubtasks: 2 }
    ]
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task, section) => {
    setSelectedTask({ ...task, section });
  };

  const handleMoveTask = (newSection) => {
    if (selectedTask) {
      const updatedTasks = { ...tasks };
      updatedTasks[selectedTask.section] = updatedTasks[selectedTask.section].filter(
        (task) => task.id !== selectedTask.id
      );
      updatedTasks[newSection].push({ ...selectedTask });
      setTasks(updatedTasks);
      setSelectedTask(null); // Close the modal
    }
  };

  const renderTasks = (taskList, section) => {
    return taskList.map((task) => (
      <div
        className={`task-card ${darkMode ? "dark" : "light"}`}
        key={task.id}
        onClick={() => handleTaskClick(task, section)}
      >
        <h4>{task.title}</h4>
        <div className="task-progress">
          {task.completedSubtasks} of {task.subtasks} subtasks
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(task.completedSubtasks / task.subtasks) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={`Main-Task ${darkMode ? "dark" : "light"}`}>
      <div className="Task-Top">
        <div className="Task-Top-Right">
          <span>Platform Launch</span>
          <div className="ButtonAndMenu">
            <button className="AddNewTask-Button">+ Add New Task</button>
            <CiMenuKebab size={24} className="Task-Menu" />
          </div>
        </div>
      </div>
      <div className={`task-board ${darkMode ? "dark" : "light"}`}>
        <div className={`section ${darkMode ? "dark" : "light"}`}>
          <h3 className="section-title">Todo ({tasks.todo.length})</h3>
          <div className="task-list">{renderTasks(tasks.todo, "todo")}</div>
        </div>
        <div className={`section ${darkMode ? "dark" : "light"}`}>
          <h3 className="section-title">Doing ({tasks.doing.length})</h3>
          <div className="task-list">{renderTasks(tasks.doing, "doing")}</div>
        </div>
        <div className={`section ${darkMode ? "dark" : "light"}`}>
          <h3 className="section-title">Done ({tasks.done.length})</h3>
          <div className="task-list">{renderTasks(tasks.done, "done")}</div>
        </div>
      </div>
      {selectedTask && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>{selectedTask.title}</h2>
      <p>
        {selectedTask.completedSubtasks} of {selectedTask.subtasks} subtasks completed
      </p>
      <div className="modal-actions">
        <button onClick={() => handleMoveTask("todo")}>Move to Todo</button>
        <button onClick={() => handleMoveTask("doing")}>Move to Doing</button>
        <button onClick={() => handleMoveTask("done")}>Move to Done</button>
      </div>
      <button className="modal-close" onClick={() => setSelectedTask(null)}>
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Task;
