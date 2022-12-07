import React from "react";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  
  return (
    <section className={styles.todos}>
      <div className={styles.todos__filter}>
        <h2>Filter by:</h2>
        <div className={styles.todos__buttons}>
          <button className={styles.todos__button}>all</button>
          <button className={styles.todos__button}>done</button>
          <button className={styles.todos__button}>undone</button>
        </div>
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
        
      </div>
    </section>
  );
};
