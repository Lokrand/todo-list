import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    {
      id: 1,
      title: "name of the my awesome board it is really cool",
      completed: true,
    },
    {
      id: 2,
      title:
        "lorem lorem lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      completed: true,
    },
    {
      id: 3,
      title: "name of the my awesome board it is really cool",
      completed: false,
    },
    {
      id: 4,
      title: "name of the my awesome board it is really cool",
      completed: false,
    },
    {
      id: 5,
      title: "name of the my awesome board it is really cool",
      completed: false,
    },
    {
      id: 6,
      title: "name of the my awesome board it is really cool",
      completed: false,
    },
  ];

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
        console.log(json);
      });
  }
}

export default new Todo();
