import { Dispatch, SetStateAction } from "react";

export interface IPopup {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
