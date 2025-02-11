// src/TodoApp.js
import React, { useState } from 'react';
import '../styles/todolist.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(todo.id)}>{todo.task}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
