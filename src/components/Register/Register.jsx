import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.svg";
import FormInput from "../FormInput/FormInput";
import Spacer from "../Spacer/Spacer";
import ErrorMessage from "../Message/Message";
import FormButton from "../FormButton/FormButton";
import { signUpRequest, signInRequest } from "../../utils/MainApi";
import useFormWithValidation from "../../hooks/useFormWithValidation";

import { EMAIL_REGEXP } from "../../utils/constants";

import "./Register.css";

export default function Register({ setIsLoggedIn, setToken }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { values, handleChange, errors, isFormValid } = useFormWithValidation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorMessage("");
  }, [values]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    if (isFormValid && !isLoading) {
      try {
        setIsLoading(true);
        await signUpRequest({ name, email, password });
        const data = await signInRequest({ email, password });
        setToken(data.token);
        setErrorMessage("");
        setIsLoggedIn(true);
        navigate("/movies");
      } catch (err) {
        if (err === "Ошибка: 409") {
          setErrorMessage("Пользователь с таким email уже зарегистрирован");
        } else {
          setErrorMessage(err);
          console.log(err);
        }
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="register">
      <header className="register__header opacity">
        <Link to="/">
          <img
            src={Logo}
            alt="Логотип - ссылка для перехода на главную страницу"
          ></img>
        </Link>
      </header>
      <main className="register__container">
        <h1 className="register__title">Добро пожаловать!</h1>
        <form
          className="register__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate
        >
          <FormInput
            label="Имя"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            required
            autocomplete="off"
            onChange={handleChange}
            errorMessage={errors.name}
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
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <Spacer size={44} mobile={121} />
          <FormButton isFormValid={isFormValid} isLoading={isLoading}>
            Зарегистрироваться
          </FormButton>
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
