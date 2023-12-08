import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css";
import { useState } from "react";
import FormButton from "../FormButton/FormButton";

const name = "Виталий";
const email = "pochta@yandex.ru";

export default function Profile({ onSubmit, setToken, isLoggedIn }) {
  const [isEdited, setIsEdited] = useState(false);

  function onPrevSubmit(e) {
    e.preventDefault();
    setIsEdited(!isEdited);
    onSubmit?.();
  }

  function handleExitClick() {
    setToken("");
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {name}!</h1>
        <form className="profile__form" name="profile" onSubmit={onPrevSubmit}>
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
              defaultValue={name}
              disabled={!isEdited}
            />
          </label>
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
              defaultValue={email}
              disabled={!isEdited}
            />
          </label>
          {isEdited ? (
            <FormButton>Сохранить</FormButton>
          ) : (
            <ul className="profile__buttons">
              <li className="profile__buttons-item">
                <button
                  className="profile__button opacity"
                  type="button"
                  onClick={() => setIsEdited(true)}
                >
                  Редактировать
                </button>
              </li>
              <li className="profile__buttons-item">
                <Link
                  className="profile__button opacity profile_font-color_red"
                  onClick={() => handleExitClick()}
                >
                  Выйти из аккаунта
                </Link>
              </li>
            </ul>
          )}
        </form>
      </main>
    </>
  );
}
