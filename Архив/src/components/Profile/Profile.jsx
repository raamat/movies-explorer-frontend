import React from "react";
import Header from "../Header/Header";
import "./Profile.css";

const name = "Евгений";
const email = "1@ra.ru";

export default function Profile() {
  return (
    <section className="Profile">
      <Header />
      <h1 className="profile__title">Привет, {name}!</h1>
      <div className="profile__name">Имя {name}</div>
      <div className="profile__email">E-mail {email}</div>
      <div>Редактировать</div>
      <div>Выйти из аккаунта</div>
    </section>
  );
}
