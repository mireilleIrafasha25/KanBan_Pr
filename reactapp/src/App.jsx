import { useState } from 'react'
import './App.css'
import ToDoApp from './component/ToDoApp'
import { DarkModeProvider } from './component/context/DarkModeContext'
function App() {
  

  return (
    <div>
      <DarkModeProvider>
      <ToDoApp/>
      </DarkModeProvider>
    </div>
  )
}

export default App
