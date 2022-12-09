import { Dispatch, SetStateAction } from "react";

export interface ITodo {
  item: {
    title: any;
    completed: boolean;
    id: number | undefined;
  };
  id: any;
  completed: boolean;
  title: string | undefined;
}

export interface IPopup {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
