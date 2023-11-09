import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

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
        <form className="register__form" name="register" onSubmit={onPrevSubmit}>
          <FormInput
            label="Имя"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
            minLength="5"
            maxLength="30"
            required
            defaultValue={"Виталий"}
          />
          <FormInput
            label="Почта"
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
            errorMessage={"Что-то пошло не так..."}
          />

          <FormButton type="submit">Зарегистрироваться</FormButton>
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
