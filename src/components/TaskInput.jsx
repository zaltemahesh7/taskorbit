import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="mb-4">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className="border p-2 rounded w-full"
        placeholder="Enter a task"
      />
      <button 
        onClick={handleAddTask} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
