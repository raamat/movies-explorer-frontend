import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css";

const name = "Виталий";
const email = "pochta@yandex.ru";

export default function Profile({ onSubmit }) {
  function onPrevSubmit(e) {
    e.preventDefault();
    onSubmit?.();
  }
  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, {name}!</h1>
        <form className="profile__form" onSubmit={onPrevSubmit}>
          <label className="profile__label profile_font-weight_500">
            Имя
            <input
              className="profile__input"
              type="text"
              minLength="2"
              maxLength="20"
              required
              value={name}
              disabled
            />
          </label>
          <label className="profile__label profile_font-weight_500">
            E-mail
            <input
              className="profile__input"
              type="email"
              minLength="5"
              maxLength="30"
              required
              value={email}
              disabled
            />
          </label>
          <ul className="profile__buttons">
            <li>
              <button className="profile__button opacity" type="submit">
                Редактировать
              </button>
            </li>
            <li>
              <Link
                className="profile__button opacity profile_font-weight_500 profile_font-color_red"
                to="/"
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
