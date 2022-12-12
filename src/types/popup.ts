import { Dispatch, SetStateAction } from "react";

export interface IPopup {
  active: boolean;
  handleOpenPopup: Dispatch<SetStateAction<boolean>>;
}
