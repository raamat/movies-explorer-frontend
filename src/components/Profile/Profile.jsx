import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { updateUserRequest } from "../../utils/MainApi";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import Message from "../Message/Message";

import { EMAIL_REGEXP } from "../../utils/constants";

import "./Profile.css";

export default function Profile({ isLoggedIn, clearLocalStorageAndStates }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isInputChanged, setIsInputChanged] = useState(false);
  const [message, setMessage] = useState("");

  const { values, handleChange, errors, isFormValid } = useFormWithValidation();

  const { name = currentUser.name, email = currentUser.email } = values;

  useEffect(() => {
    setMessage("");
    if (
      (name !== undefined && name !== currentUser.name) ||
      (email !== undefined && email !== currentUser.email)
    ) {
      setIsInputChanged(true);
    } else setIsInputChanged(false);
  }, [values]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid && isInputChanged) {
      try {
        const data = await updateUserRequest({ name, email });
        setCurrentUser({ name, email });
        setMessage("Данные успешно обновлены");
        setIsInputChanged(false);
        console.log(data);
      } catch (err) {
        if (err === "Ошибка: 409") {
          setMessage("Пользователь с таким email уже зарегистрирован");
        } else {
          setMessage(err);
          console.log(err);
        }
      }
    }
  }

  function handleExitClick() {
    clearLocalStorageAndStates();
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <label className="profile__label profile__label_active">
            Имя
            <input
              className="profile__input"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              minLength="2"
              maxLength="20"
              required
              onChange={handleChange}
              defaultValue={currentUser.name}
            />
          </label>
          {errors.name && (
            <span className="form-input__message">{errors.name}</span>
          )}
          <label className="profile__label profile__label-active">
            E-mail
            <input
              className="profile__input"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              minLength="5"
              maxLength="30"
              required
              onChange={handleChange}
              defaultValue={currentUser.email}
              pattern={EMAIL_REGEXP}
            />
          </label>
          {errors.email && (
            <span className="form-input__message">{errors.email}</span>
          )}
          <Message className="message_type_form">{message}</Message>
          <ul className="profile__buttons">
            <li className="profile__buttons-item">
              <button
                className="profile__button opacity"
                type="submit"
                disabled={!isInputChanged || !isFormValid}
              >
                Редактировать
              </button>
            </li>
            <li className="profile__buttons-item">
              <Link
                className="profile__button opacity profile_font-color_red"
                onClick={handleExitClick}
              >
                Выйти из аккаунта
              </Link>
            </li>
          </ul>
        </form>
      </main>
    </>
  );
}
