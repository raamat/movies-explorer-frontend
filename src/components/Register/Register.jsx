import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../images/logo.svg";

export default function Register() {
  return (
    <div className="register">
      <header className="register__header">
        <Link to="/">
          <img
            src={Logo}
            alt="Логотип - ссылка для перехода на главную страницу"
          ></img>
        </Link>
      </header>
      <main className="register__container">
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <label className="register__label">
            Имя
            <imput
              className="register__input"
              type="text"
              name="name"
              id="name"
              minLength="5"
              maxLength="30"
              required
            >
              Виталий
            </imput>
          </label>
          <label className="register__label">
            E-mail
            <imput
              className="register__input"
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
          <label className="register__label">
            Пароль
            <imput
              className="register__input register_color_red "
              type="password"
              name="password"
              id="password"
              minLength="8"
              required
            >••••••••••••••</imput>
            <p className="register__message register_color_red ">Что-то пошло не так...</p>
          </label>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <div className="register__links-block">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </div>
      </main>
    </div>
  );
}
