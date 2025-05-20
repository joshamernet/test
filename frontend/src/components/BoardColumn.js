import React, { useState } from 'react';
import TaskCard from './TaskCard';

const BoardColumn = ({ title, tasks, onDrop, onAddTask }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData('task'));
    onDrop(task, title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ ...newTask, status: title });
    setNewTask({ title: '', description: '' });
    setIsAdding(false);
  };

  return (
    <div
      className="board-column"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className="column-header">{title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDragStart={(e, task) => {
            e.dataTransfer.setData('task', JSON.stringify(task));
          }}
        />
      ))}
      
      {!isAdding ? (
        <button
          className="add-task-button"
          onClick={() => setIsAdding(true)}
        >
          + Add Task
        </button>
      ) : (
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="task-input"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            className="task-input"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <div className="task-actions">
            <button type="submit" className="add-task-button">
              Add
            </button>
            <button
              type="button"
              className="add-task-button"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BoardColumn; 