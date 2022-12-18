import React, { useState, useEffect, FC, useCallback } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import user from "../../store/user";
import { observer } from "mobx-react-lite";

const checkEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

export const Login: FC = observer(() => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const navigate = useNavigate();
  const buttonActive = checkEmail.test(emailValue) && passwordValue.length > 5;

  const changeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmailValue(e.target.value);
    },
    []
  );

  const changePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordValue(e.target.value);
    },
    []
  );

  const login = useCallback(() => {
    user.fetchRegisterUser(emailValue, passwordValue);
    setEmailValue("");
    setPasswordValue("");
  }, []);

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
        <button
          className={styles.login__button}
          onClick={login}
          disabled={!buttonActive}
        >
          Login
        </button>
      </div>
    </section>
  );
});
