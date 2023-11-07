import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../images/logo.svg";

export default function Register({ onSubmit }) {
  function onPrevSubmit(e) {
    e.preventDefault();
    onSubmit?.();
  }

  return (
    <div className="register">
      <header className="register__header opacity">
        <Link to="/">
          <img src={Logo} alt="Логотип - ссылка для перехода на главную страницу"></img>
        </Link>
      </header>
      <main className="register__container">
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={onPrevSubmit}>
          <label className="register__label">
            Имя
            <input
              className="register__input"
              type="text"
              name="name"
              id="name"
              minLength="5"
              maxLength="30"
              required
              value={"Виталий"}
            />
          </label>
          <label className="register__label">
            E-mail
            <input
              className="register__input"
              type="email"
              name="email"
              id="email"
              minLength="5"
              maxLength="30"
              required
              value={"pochta@yandex.ru"}
            />
          </label>
          <label className="register__label">
            Пароль
            <input
              className="register__input register_color_red"
              type="password"
              name="password"
              id="password"
              minLength="8"
              required
              value={"12345678"}
            />
            <p className="register__message register_color_red ">Что-то пошло не так...</p>
          </label>
          <button className="register__button opacity" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__links-block">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link className="register__link opacity" to="/signin">
            Войти
          </Link>
        </div>
      </main>
    </div>
  );
}
