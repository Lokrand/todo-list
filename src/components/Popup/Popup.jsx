import React, { useEffect } from "react";
import { Cross } from "../../icons/Cross";
import styles from "./Popup.module.scss";

export const Popup = ({ active, setActive }) => {
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        setActive(false);
      }
    }
    if (active) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [active]);

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
        ></textarea>
        <button className={styles.popup__button}>Confirm</button>
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
