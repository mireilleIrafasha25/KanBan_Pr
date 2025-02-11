import { useState } from 'react'
import './App.css'
import ToDoApp from './component/ToDoApp'
import { DarkModeProvider } from './component/context/DarkModeContext'
import Login from './component/login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import TodoApp from './component/TodoList2'
function App() {
  

  return (
    
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<ToDoApp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<TodoApp />} />
          </Routes>
        </Router>
      </DarkModeProvider>

  )
}

export default App
