import React, { useState, FC, useEffect } from "react";
import styles from "./TodoList.module.scss";
import { TodoItem } from "../TodoItem/TodoItem";
import { Popup } from "../Popup/Popup";
import todo from "../../store/todo";
import { observer } from "mobx-react-lite";

export const TodoList: FC = observer(() => {
  const [popupActive, setPopupActive] = useState<boolean>(false);

  useEffect(() => {
    todo.fetchTodos();
  }, []);

  const openPopup = (): void => {
    setPopupActive(true);
    todo.fetchTodos();
  };
  const closePopup = (): void => {
    setPopupActive(false);
  };

  const filterByAll = (): void => {
    todo.fetchTodos();
  };
  const filterByDone = (): void => {
    todo.filterByDone();
  };
  const filterByUndone = (): void => {
    todo.filterByUndone();
  };

  return (
    <section className={styles.todos}>
      <div className={styles.todos__filter}>
        <div className={styles.todos__filterBlock}>
          <h2>Filter by:</h2>
          <div className={styles.todos__buttons}>
            <button className={styles.todos__button} onClick={filterByAll}>
              all
            </button>
            <button className={styles.todos__button} onClick={filterByDone}>
              done
            </button>
            <button className={styles.todos__button} onClick={filterByUndone}>
              undone
            </button>
          </div>
        </div>
        <button className={styles.todos__addTodoButton} onClick={openPopup}>
          Add new todo
        </button>
      </div>
      <div className={styles.todos__columns}>
        <div className={styles.todos__number}>
          <h3>Number</h3>
        </div>
        <div className={styles.todos__name}>
          <h3>Name</h3>
        </div>
        <div className={styles.todos__status}>
          <h3>Status</h3>
        </div>
        <div className={styles.todos__action}>
          <h3>Action</h3>
        </div>
      </div>
      <div>
        {todo.todos.map((el) => {
          return <TodoItem key={el.id} item={el} />;
        })}
      </div>
      <Popup active={popupActive} onClose={() => setPopupActive(false)} />
    </section>
  );
});
