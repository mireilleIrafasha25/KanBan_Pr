import { CiMenuKebab } from "react-icons/ci";
import TaskBoard from "./TaskBoard";
import { useDarkMode } from "./context/DarkModeContext";
import "../styles/Task.css"
import { useState } from "react";
import "../styles/TaskBoard.css"; 
const Task=()=>
{
    const {darkMode}=useDarkMode();
     const initialTasks = {
        todo: [
          { id: 1, title: "Build settings UI", subtasks: 2, completedSubtasks: 2 },
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
    
      const renderTasks = (taskList) => {
        return taskList.map((task) => (
          <div className={`task-card ${darkMode?"dark":"light"}`} key={task.id}>
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
    return(
        <div className={`Main-Task ${darkMode?"dark":"light"}`} > 
            <div className="Task-Top">
            
             <div className="Task-Top-Right">
             <span>PlatForm Launch</span>
             <div className="ButtonAndMenu"><button className="AddNewTask-Button">+ Add New Task</button>
             <CiMenuKebab size={24} className="Task-Menu"/></div>
             </div>
            </div>
            <div className={`task-board ${darkMode?"dark":"light"}`} >
      <div className={`section ${darkMode?"dark":"light"}`}>
        <h3 className="section-title">Todo ({tasks.todo.length})</h3>
        <div className="task-list">{renderTasks(tasks.todo)}</div>
      </div>
      <div className={`section ${darkMode?"dark":"light"}`}>
        <h3 className="section-title">Doing ({tasks.doing.length})</h3>
        <div className="task-list">{renderTasks(tasks.doing)}</div>
      </div>
      <div className={`section ${darkMode?"dark":"light"}`}>
        <h3 className="section-title">Done ({tasks.done.length})</h3>
        <div className="task-list">{renderTasks(tasks.done)}</div>
      </div>
    </div>
        </div>
    )
}
export default Task