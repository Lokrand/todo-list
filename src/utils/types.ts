import { Dispatch, SetStateAction } from "react";
import { Interface } from "readline";
import { ArrowFunction } from "typescript";

export interface ITodo {
  todo: {
    title: string,
    completed: boolean,
    id: number,
    removeTodo: (id:number) => {},
    fetchCompleteTodo: (todo: {
      title: string,
      completed: boolean,
      id: number,
    }) => {},
  }
  id: number,
  completed: boolean,
  title: string,
}

export interface IPopup {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
}