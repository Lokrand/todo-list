import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/todo";

class Todo {
  todos: ITodo[] = [];
  url: string = "http://localhost:3001/todos";
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo): void {
    this.todos.push(todo);
  }

  async checkResponse(res: any) {
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error(res);
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  async commonFetch(path: string, params = {}) {
    try {
      const res = await fetch(`${this.url}${path}`, {
        headers: {
          "Content-Type": "application/json",
        },
        ...params,
      });
      return await this.checkResponse(res);
    } catch (error) {
      console.log("checkresponse = ", error);
      return Promise.reject(error);
    }
  }

  removeTodo(id: number): void {
    this.commonFetch(`/${id}`, { method: "DELETE" }).then(() =>
      this.fetchTodos()
    );
  }

  filterByDone(): void {
    this.commonFetch("?completed=true", { method: "GET" }).then((json) => {
      this.todos = [...json];
    });
  }

  filterByUndone(): void {
    this.commonFetch("?completed=false", { method: "GET" }).then((json) => {
      this.todos = [...json];
    });
  }

  fetchTodos(): void {
    this.commonFetch("", { method: "GET" }).then((json) => {
      this.todos = [...json];
    });
  }

  fetchCompleteTodo(todo: ITodo): void {
    this.commonFetch(`/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({ title: todo.title, completed: !todo.completed }),
    }).then(() => this.fetchTodos());
  }

  fetchAddNewTodo(name: string): void {
    this.commonFetch("", {
      method: "POST",
      body: JSON.stringify({ title: name, completed: false }),
    }).then(this.addTodo);
  }
}

export default new Todo();
