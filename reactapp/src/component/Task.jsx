import { CiMenuKebab } from "react-icons/ci";
import TaskBoard from "./TaskBoard";
import { useDarkMode } from "./context/DarkModeContext";
import "../styles/Task.css"
const Task=()=>
{
    const {darkMode}=useDarkMode();
    return(
        <div className={`Main-Task ${darkMode?"dark":"light"}`} > 
            <div className="Task-Top">
            
             <div className="Task-Top-Right">
             <span>PlatForm Launch</span>
             <div className="ButtonAndMenu"><button className="AddNewTask-Button">+ Add New Task</button>
             <CiMenuKebab size={24} className="Task-Menu"/></div>
             </div>
            </div>
        </div>
    )
}
export default Task