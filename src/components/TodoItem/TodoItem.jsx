import React from "react";
import styles from "./TodoItem.module.scss";
import todo from "../../store/todo";

export const TodoItem = ({ data }) => {
  const removeTodo = () => {
    todo.removeTodo(data.id);
  };

  const changeStatus = () => {
    todo.fetchCompleteTodo(data);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo__item}>
        <p>#{data.id}</p>
      </div>
      <div className={styles.todo__item}>
        <p>{data.title}</p>
      </div>
      <div className={styles.todo__item}>
        {data.completed ? (
          <p className={styles.todo__status}>done</p>
        ) : (
          <p className={styles.todo__status_active}>undone</p>
        )}
      </div>
      <div className={styles.todo__buttons}>
        {data.completed ? (
          <button className={styles.todo__undone} onClick={changeStatus}>
            Undone
          </button>
        ) : (
          <button className={styles.todo__done} onClick={changeStatus}>
            Done
          </button>
        )}
        <button className={styles.todo__remove} onClick={removeTodo}>
          Remove
        </button>
      </div>
    </div>
  );
};
