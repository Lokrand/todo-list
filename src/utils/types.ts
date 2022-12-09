import { Interface } from "readline";

export interface ITodo {
  data: {
    title: string,
    completed: boolean,
    id: number,
  }
}

export interface IPopup {
  active: boolean,
  setActive: (arg:boolean) => {},
}