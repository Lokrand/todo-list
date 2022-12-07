import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((el) => el.id !== id);
  }
  completeTodo(id) {
    this.todos = this.todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
  }
  fetchTodos() {
    fetch("http://localhost:3001/todos", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      });
  }
  fetchAddNewTodo(name) {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        authorization: "a930b285-48bc-4fb0-af5d-2133c0eb4e79",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: name, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
}

export default new Todo();
