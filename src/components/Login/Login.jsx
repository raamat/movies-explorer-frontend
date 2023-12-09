import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FormButton from "../FormButton/FormButton";
import { signInRequest } from "../../utils/MainApi";
import useFormWithValidation from "../../hooks/useFormWithValidation";

import { EMAIL_REGEXP } from "../../utils/constants";

import "./Login.css";

export default function Login({ setIsLoggedIn, setToken }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { values, handleChange, errors, isFormValid } = useFormWithValidation();
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, [values]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (isFormValid) {
      try {
        const data = await signInRequest({ email, password });
        setToken(data.token);
        setErrorMessage("");
        setIsLoggedIn(true);
        navigate("/movies");
      } catch (err) {
        if (err === "Ошибка: 401") {
          setErrorMessage("Неверный логин или пароль");
        } else {
          setErrorMessage(err);
          console.log(err);
        }
      }
    }  
  }

  return (
    <div className="login">
      <header className="login__header opacity">
        <Link to="/">
          <img
            src={Logo}
            alt="Логотип - ссылка для перехода на главную страницу"
          ></img>
        </Link>
      </header>
      <main className="login__container">
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" name="login" onSubmit={handleSubmit}>
          <FormInput
            label="E-mail"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            minLength="5"
            maxLength="30"
            required
            onChange={handleChange}
            errorMessage={errors.email}
            pattern={EMAIL_REGEXP}
          />
          <FormInput
            label="Пароль"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            minLength="8"
            required
            onChange={handleChange}
            errorMessage={errors.password}
          />
          <div className="login__empty-block"></div>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <FormButton isFormValid={isFormValid}>Войти</FormButton>
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
