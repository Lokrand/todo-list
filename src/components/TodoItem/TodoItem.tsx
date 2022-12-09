import React, {FC} from "react";
import styles from "./TodoItem.module.scss";
import todo from "../../store/todo";
import { ITodo } from "../../utils/types";

export const TodoItem:FC<ITodo> = (item:ITodo) => {
  // i dont what is it, but its worked :)
  const element = JSON.parse(JSON.stringify(item.item))

  const removeTodo = ():void => {
    todo.removeTodo(element.id);
  };

  const changeStatus = ():void => {
    todo.fetchCompleteTodo(element);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo__item}>
        <p>#{element.id}</p>
      </div>
      <div className={styles.todo__item}>
        <p>{element.title}</p>
      </div>
      <div className={styles.todo__item}>
        {element.completed ? (
          <p className={styles.todo__status}>done</p>
        ) : (
          <p className={styles.todo__status_active}>undone</p>
        )}
      </div>
      <div className={styles.todo__buttons}>
        {element.completed ? (
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
