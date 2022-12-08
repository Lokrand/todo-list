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
    fetch(`http://localhost:3001/todos/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  }

  completeTodo(id) {
    this.todos = this.todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
  }

  setTodos = (todo) => {
    this.todo = todo;
  };

  filterByDone() {
    fetch("http://localhost:3001/todos?completed=true", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  filterByUndone() {
    fetch("http://localhost:3001/todos?completed=false", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  fetchTodos() {
    fetch("http://localhost:3001/todos", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  fetchCompleteTodo() {}

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
      .then(this.setTodos)
      .catch((err) => console.error(err));
  }
}

export default new Todo();
