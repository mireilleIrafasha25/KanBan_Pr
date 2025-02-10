import "../styles/Todoapp.css"
import Board from "./Board";
import Task from "./Task";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useDarkMode } from "./context/DarkModeContext";
const ToDoApp=()=>
{
const darkMode=useDarkMode()
    return(
        
        <div className={`Main-Division ${darkMode?"dark":"light"}`}>   
            <Board/>
            <Task/>
        </div>
    )
}
export default ToDoApp;