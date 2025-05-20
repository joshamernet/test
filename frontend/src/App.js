import React, { useState, useEffect } from 'react';
import BoardColumn from './components/BoardColumn';
import { fetchTasks, createTask, updateTask } from './services/api';
import './styles/index.css';

const COLUMNS = ['Todo', 'In Progress', 'Done'];

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to load tasks');
      console.error(err);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const task = await createTask(newTask);
      setTasks([...tasks, task]);
    } catch (err) {
      setError('Failed to create task');
      console.error(err);
    }
  };

  const handleDrop = async (task, newStatus) => {
    try {
      const updatedTask = await updateTask(task._id, { status: newStatus });
      setTasks(tasks.map(t => t._id === task._id ? updatedTask : t));
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Kanban Board</h1>
        {error && <div className="error-message">{error}</div>}
      </header>
      <main className="kanban-board">
        {COLUMNS.map(column => (
          <BoardColumn
            key={column}
            title={column}
            tasks={tasks.filter(task => task.status === column)}
            onDrop={handleDrop}
            onAddTask={handleAddTask}
          />
        ))}
      </main>
    </div>
  );
}

export default App; 