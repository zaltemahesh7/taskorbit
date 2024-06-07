import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEditTask = (id, newTask) => {
    const editedTask = prompt('Edit your task:', newTask);
    if (editedTask) {
      dispatch(editTask(id, editedTask));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center mb-2">
          <span
            onClick={() => handleToggleTask(task.id)}
            className={`cursor-pointer flex items-center gap-2 ${task.completed ? 'line-through' : ''}`}
          >
            <input type="checkbox" />
            {` ${task.text}`}
          </span>
          <div>
            <button
              onClick={() => handleEditTask(task.id, task.text)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
