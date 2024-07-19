import React from "react";
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskInput />
      <TaskList />
      <Link to='/stopwatch'>Stop Watch</Link>
    </div>
  );
}

export default Tasks;
