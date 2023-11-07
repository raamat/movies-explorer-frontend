import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/logo.svg";

export default function Login({ onSubmit }) {
  function onPrevSubmit(e) {
    e.preventDefault();
    onSubmit?.();
  }
  return (
    <div className="login">
      <header className="login__header opacity">
        <Link to="/">
          <img src={Logo} alt="Логотип - ссылка для перехода на главную страницу"></img>
        </Link>
      </header>
      <main className="login__container">
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={onPrevSubmit}>
          <label className="login__label">
            E-mail
            <input
              className="login__input"
              type="email"
              name="email"
              id="email"
              minLength="5"
              maxLength="30"
              required
              value={"pochta@yandex.ru"}
            />
          </label>
          <label className="login__label">
            Пароль
            <input
              className="login__input"
              type="password"
              name="password"
              id="password"
              minLength="8"
              required
            />
          </label>
          <button className="login__button opacity" type="submit">
            Войти
          </button>
        </form>
        <div className="login__links-block">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link className="login__link opacity" to="/signup">
            Регистрация
          </Link>
        </div>
      </main>
    </div>
  );
}
