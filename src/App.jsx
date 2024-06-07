// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import AddToDo from './components/AddToDo'
// import { Route, Router, Routes } from 'react-router-dom'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className=' m-3 '>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/addtodo' element={<AddToDo />} />
//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App


import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
