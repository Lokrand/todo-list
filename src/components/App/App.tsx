import React from 'react';
import './App.module.scss';
import { Routes, Route } from "react-router-dom";
import { Login } from '../Login/Login';
import { TodoList } from '../TodoList/TodoList';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/todos' element={<TodoList />}></Route>
    </Routes>
  );
}

export default App;
