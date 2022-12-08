import React, { useState } from "react";
import styles from "./TodoList.module.scss";
import { items } from '../../utils/constants';
import { TodoItem } from "../TodoItem/TodoItem";
import { Popup } from "../Popup/Popup";
import todo from "../../store/todo";
import { observer } from "mobx-react-lite";

export const TodoList = observer(() => {
  const [popupActive, setPopupActive] = useState(false);
  
  const openPopup = () => {
    setPopupActive(true);
    todo.fetchTodos()
  }
  const closePopup = () => {
    setPopupActive(false);
  }

  const filterByAll = () => {
    todo.fetchTodos()
  }
  const filterByDone = () => {
    todo.filterByDone()
  }
  const filterByUndone = () => {
    todo.filterByUndone()
  }

  return (
    <section className={styles.todos}>
      <div className={styles.todos__filter}>
        <div className={styles.todos__filterBlock}>
        <h2>Filter by:</h2>
        <div className={styles.todos__buttons}>
          <button className={styles.todos__button} onClick={filterByAll}>all</button>
          <button className={styles.todos__button} onClick={filterByDone}>done</button>
          <button className={styles.todos__button} onClick={filterByUndone}>undone</button>
        </div>

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
        {todo.todos.map((el) => {
          return (
            <TodoItem key={el.id} data={el}/>
          )
        })}
      </div>
      {popupActive && <Popup active={popupActive} setActive={setPopupActive}/>}
    </section>
  );
});
