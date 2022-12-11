import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/todo";
import { baseUrl } from "../utils/constants";

class Todo {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo): void {
    this.todos.push(todo);
  }

  removeTodo(id: number): void {
    fetch(`${baseUrl}/todos/${id}`, { method: "DELETE" ,
    headers: {
      "Content-Type": "application/json",
    },
  })
      .then(() => this.fetchTodos())
      .catch((err) => console.error(err));
  }

  completeTodo(id: number): void {
    this.todos = this.todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
  }

  filterByDone(): void {
    fetch(`${baseUrl}/todos?completed=true`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  filterByUndone(): void {
    fetch(`${baseUrl}/todos?completed=false`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  fetchTodos(): void {
    fetch(`${baseUrl}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  fetchCompleteTodo(todo: ITodo): void {
    fetch(`${baseUrl}/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo.title, completed: !todo.completed }),
    })
      .then(() => this.fetchTodos())
      .catch((err) => console.error(err));
  }

  fetchAddNewTodo(name: string): void {
    fetch(`${baseUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: name, completed: false }),
    })
      .then((res) => res.json())
      .then(this.addTodo)
      .catch((err) => console.error(err));
  }
}

export default new Todo();
