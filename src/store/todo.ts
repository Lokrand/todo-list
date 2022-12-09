import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/todo";

class Todo {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo): void {
    this.todos.push(todo);
  }

  removeTodo(id: number):void {
    fetch(`http://localhost:3001/todos/${id}`, { method: "DELETE" })
      .then(() => this.fetchTodos())
      .catch((err) => console.error(err));
  }

  completeTodo(id: number):void {
    this.todos = this.todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
  }

  filterByDone():void {
    fetch("http://localhost:3001/todos?completed=true", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  filterByUndone():void {
    fetch("http://localhost:3001/todos?completed=false", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
      })
      .catch((err) => console.error(err));
  }

  fetchTodos():void {
    fetch("http://localhost:3001/todos", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.todos = [...json];
        console.log(json);
      })
      .catch((err) => console.error(err));
  }

  fetchCompleteTodo(todo: ITodo):void {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo.title, completed: !todo.completed }),
    })
      .then(() => this.fetchTodos())
      .catch((err) => console.error(err));
  }

  fetchAddNewTodo(name: string):void {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        authorization: "a930b285-48bc-4fb0-af5d-2133c0eb4e79",
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
