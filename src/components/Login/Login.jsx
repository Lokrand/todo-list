import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (emailValue.length > 0 && passwordValue > 0) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }, [emailValue, passwordValue])

  const changeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const changePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const login = () => {
    setEmailValue('')
    setPasswordValue('')
    setButtonActive(false)
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
