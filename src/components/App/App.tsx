import React, { FC } from "react";
import "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { TodoList } from "../TodoList/TodoList";
import { Header } from "../Header/Header";

export const App: FC = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/todo-list" element={<Login />} />
        <Route path="/todos" element={<TodoList />}></Route>
      </Routes>
    </main>
  );
};

export default App;
