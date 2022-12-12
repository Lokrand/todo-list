import { makeAutoObservable } from "mobx";
import { IUser } from "../types/user";

class User {
  currentUser!: IUser;
  url: string = "http://localhost:3001/register";

  constructor() {
    makeAutoObservable(this);
  }

  setNewUser(user: IUser): void {
    this.currentUser = user;
  }

  fetchRegisterUser(email: string, password: string): void {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((user) => this.setNewUser(user))
      .catch((err) => console.error(err));
  }
}

export default new User();
