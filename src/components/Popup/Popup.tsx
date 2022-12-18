import React, { useEffect, useState, FC } from "react";
import { Cross } from "../../icons/Cross";
import styles from "./Popup.module.scss";
import todo from "../../store/todo";

interface IPopup {
  active: boolean;
  onClose: VoidFunction;
}

export const Popup: FC<IPopup> = ({ active, onClose }) => {
  const [textareaValue, setTextareaValue] = useState<string>("");

  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        onClose();
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
    onClose();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div className={active ? styles.popup : `${styles.popup} ${styles.popup_inactive}`}>
      <div className={styles.popup__content}>
        <h3 className={styles.popup__title}>Add a new task</h3>
        <form className={styles.popup__form}>
          <input
            placeholder="Enter a new task"
            className={styles.popup__textarea}
            onChange={onChangeInput}
          ></input>
          {textareaValue.length > 0 ? (
            <button
              type="submit"
              className={styles.popup__button}
              onClick={addNewTodo}
            >
              Confirm
            </button>
          ) : (
            <button
              className={`${styles.popup__button} ${styles.popup__button_disabled}`}
              disabled
            >
              Confirm
            </button>
          )}
        </form>
        <div
          className={styles.popup__cross}
          onClick={() => {
            onClose();
          }}
        >
          <Cross />
        </div>
      </div>
    </div>
  );
};
