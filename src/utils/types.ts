import { Dispatch, SetStateAction } from "react";
import { Interface } from "readline";
import { ArrowFunction } from "typescript";

export interface ITodo {
  item?: {
    // todo: {
    //   title: string,
    //   completed: boolean,
    //   id: number,
    //   removeTodo: (id:number) => {},
    //   fetchCompleteTodo: (todo: {
    //     title: string,
    //     completed: boolean,
    //     id: number,
    //   }) => {},
    // },
    title?: any,
    completed?: boolean,
    id?: number | undefined,
    // removeTodo: (id:number) => {},
    // fetchCompleteTodo: (todo: {
    //   title: string,
    //   completed: boolean,
    //   id: number,
    // }) => {},
  }
  // removeTodo: (id:number) => {},
  // fetchCompleteTodo: (todo: {
  //   title: string,
  //   completed: boolean,
  //   id: number,
  // }) => {},
  id?: any,
  completed?: boolean,
  title?: string | undefined,
}

export interface IPopup {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
}