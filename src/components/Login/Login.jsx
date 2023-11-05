import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/logo.svg";

export default function Login() {
  return (
    <div className="login">
      <header className="login__header">
        <Link to="/">
          <img
            src={Logo}
            alt="Логотип - ссылка для перехода на главную страницу"
          ></img>
        </Link>
      </header>
      <main className="login__container">
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <label className="login__label">
            E-mail
            <imput
              className="login__input"
              type="email"
              name="email"
              id="email"
              minLength="5"
              maxLength="30"
              required
            >
              pochta@yandex.ru
            </imput>
          </label>
          <label className="login__label">
            Пароль
            <imput
              className="login__input"
              type="password"
              name="password"
              id="password"
              minLength="8"
              required
            ></imput>
          </label>
          <button className="login__button" type="submit">
            Войти
          </button>
        </form>
        <div className="login__links-block">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </main>
    </div>
  );
}
