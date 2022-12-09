import { makeAutoObservable } from "mobx";
import { IUser } from "../types/user";

class User {
  currentUser!: IUser;

  constructor() {
    makeAutoObservable(this);
  }

  setNewUser(user: IUser): void {
    this.currentUser = user;
  }

  fetchRegisterUser(email:string, password:string): void {
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        authorization: "a930b285-48bc-4fb0-af5d-2133c0eb4e79",
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
