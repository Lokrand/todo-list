import React, { useState, useEffect, FC } from "react";
import styles from "./Login.module.scss";
import { NavLink } from "react-router-dom";
import todo from "../../store/todo";

export const Login:FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (emailValue.length > 0 && passwordValue.length > 0) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }, [emailValue, passwordValue])

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value);
  };

  const login = (): void => {
    setEmailValue('')
    setPasswordValue('')
    setButtonActive(false)
    todo.fetchTodos()
  }

  return (
    <section className={styles.login}>
      <div className={styles.login__block}>
        <h2 className={styles.login__title}>Authorization</h2>
        <div className={styles.login__inputs}>
          <input
            type="email"
            placeholder="e-mail"
            className={styles.login__input}
            onChange={changeEmail}
          />
          <input
            type="password"
            placeholder="password"
            className={styles.login__input}
            onChange={changePassword}
          />
        </div>
        {buttonActive ? (
          <NavLink to='/todos' className={styles.login__button} onClick={login}>Login</NavLink>
          
          ) : (  
            <button className={`${styles.login__button} ${styles.login__button_disabled}`} disabled>Login</button>
        )}
      </div>
    </section>
  );
};
