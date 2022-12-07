import React from "react";
import "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { TodoList } from "../TodoList/TodoList";
import { Header } from "../Header/Header";

export const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/items" element={<TodoList />}></Route>
      </Routes>
    </main>
  );
};

export default App;
