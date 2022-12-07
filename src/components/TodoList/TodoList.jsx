import React, { useState } from "react";
import styles from "./TodoList.module.scss";
import { items } from '../../utils/constants';
import { TodoItem } from "../TodoItem/TodoItem";
export const TodoList = () => {
  const [popupActive, setPopupActive] = useState(false);
  
  const openPopup = () => {
    setPopupActive(true);
  }
  
  return (
    <section className={styles.todos}>
      <div className={styles.todos__filter}>
        <h2>Filter by:</h2>
        <div className={styles.todos__buttons}>
          <button className={styles.todos__button}>all</button>
          <button className={styles.todos__button}>done</button>
          <button className={styles.todos__button}>undone</button>
        </div>
        <button className={styles.todos__addTodoButton} onClick={openPopup}>Add new todo</button>
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
        {items.map((el) => {
          return (
            <TodoItem data={el}/>
          )
        })}
      </div>
    </section>
  );
};
