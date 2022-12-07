import React, { useEffect, useState } from "react";
import { Cross } from "../../icons/Cross";
import styles from "./Popup.module.scss";
import todo from "../../store/todo";

export const Popup = ({ active, setActive }) => {
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    function closeByEscape(evt) {
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
    setActive(false)
    todo.fetchTodos();
  }

  const onChangeTextarea = (e) => {
    setTextareaValue(e.target.value);
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <h3 className={styles.popup__title}>Add a new task</h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className={styles.popup__textarea}
          onChange={onChangeTextarea}
        ></textarea>
        <button className={styles.popup__button} onClick={addNewTodo}>Confirm</button>
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
