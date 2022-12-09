import React, { useEffect, useState, FC, KeyboardEvent } from "react";
import { Cross } from "../../icons/Cross";
import styles from "./Popup.module.scss";
import todo from "../../store/todo";
import { IPopup } from "../../types/types";

export const Popup:FC<IPopup> = ({ active, setActive }) => {
  const [textareaValue, setTextareaValue] = useState<string>("");

  useEffect(() => {
    function closeByEscape(evt: any):void {
      if (evt.key === "Escape") {
        setActive(false);
        setTextareaValue("");
      }
    }
    if (active) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [active]);

  const addNewTodo = () => {
    todo.fetchAddNewTodo(textareaValue);
    todo.fetchTodos();
    setActive(false)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextareaValue(e.target.value);
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <h3 className={styles.popup__title}>Add a new task</h3>
        <form className={styles.popup__form}>

        <input
          placeholder="Enter a new task"
          className={styles.popup__textarea}
          onChange={onChangeInput}
          ></input>
        {textareaValue.length > 0 ? (
          <button type="submit" className={styles.popup__button} onClick={addNewTodo}>Confirm</button>
          ) : (
          <button className={`${styles.popup__button} ${styles.popup__button_disabled}`} disabled>Confirm</button>
        )}
          </form>
        <div
          className={styles.popup__cross}
          onClick={() => {
            setActive(false);
          }}
        >
          <Cross />
        </div>
      </div>
    </div>
  );
};
