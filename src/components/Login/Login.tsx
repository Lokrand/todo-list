import React, { useState, useEffect, FC } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import todo from "../../store/todo";
import user from "../../store/user";
import { observer } from "mobx-react-lite";

export const Login: FC = observer(() => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [buttonActive, setButtonActive] = useState(false);
  const checkEmail = new RegExp(
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (checkEmail.test(emailValue) && passwordValue.length > 5) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [emailValue, passwordValue]);

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value);
  };

  const login = (): void => {
    user.fetchRegisterUser(emailValue, passwordValue);
    setEmailValue("");
    setPasswordValue("");
    setButtonActive(false);
    todo.fetchTodos();
  };
  useEffect(() => {
    if (user.currentUser) {
      return navigate("/todos");
    }
  }, [user.currentUser]);

  return (
    <section className={styles.login}>
      <div className={styles.login__block}>
        <h2 className={styles.login__title}>Authorization</h2>
        <div className={styles.login__inputs}>
          <div>
            <input
              type="email"
              placeholder="e-mail"
              className={styles.login__input}
              onChange={changeEmail}
            />
            {!checkEmail.test(emailValue) && emailValue.length > 0 ? (
              <p className={styles.login__validate}>Incorrect email</p>
            ) : null}
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className={styles.login__input}
              onChange={changePassword}
            />
            {passwordValue.length < 6 && passwordValue.length > 0 ? (
              <p className={styles.login__validate}>
                The password must be at least 6 symbols long
              </p>
            ) : null}
          </div>
        </div>
        {buttonActive ? (
          <button className={styles.login__button} onClick={login}>
            Login
          </button>
        ) : (
          <button
            className={`${styles.login__button} ${styles.login__button_disabled}`}
            disabled
          >
            Login
          </button>
        )}
      </div>
    </section>
  );
});
