import React, { FC } from "react";
import "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { TodoList } from "../TodoList/TodoList";
import { Header } from "../Header/Header";
// import { ITodo } from "../../types/types";

export const App:FC = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<TodoList item={{
          title: undefined,
          completed: false,
          id: undefined
        }} id={undefined} completed={false} title={undefined} />}></Route>
      </Routes>
    </main>
  );
};

export default App;
