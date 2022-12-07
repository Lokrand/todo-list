import React from "react";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ data }) => {
  

  return (
    <div className={styles.todo}>
      <div className={styles.todo__item}>
        <p>#{data.id}</p>
      </div>
      <div className={styles.todo__item}>
        <p>{data.title}</p>
      </div>
      <div className={styles.todo__item}>
        {data.status ? (
          <p className={styles.todo__status}>done</p>
        ) : (
          <p className={styles.todo__status_active}>undone</p>
        )}
      </div>
      <div className={styles.todo__buttons}>
        <button className={styles.todo__done}>Done</button>
        <button className={styles.todo__undone}>Undone</button>
        <button className={styles.todo__remove}>Remove</button>
      </div>
    </div>
  );
};
