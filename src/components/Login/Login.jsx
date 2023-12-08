import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

export default function Login({ onSubmit, setIsLoggedIn }) {
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
        <form className="login__form" name="login" onSubmit={onPrevSubmit}>
          <FormInput
            label="E-mail"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            minLength="5"
            maxLength="30"
            required
            defaultValue={"pochta@yandex.ru"}
          />
          <FormInput
            label="Пароль"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            minLength="8"
            required
            defaultValue={"12345678"}
          />
          <div className="login__empty-block"></div>
          <FormButton type="submit" setIsLoggedIn={setIsLoggedIn}>Войти</FormButton>
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
