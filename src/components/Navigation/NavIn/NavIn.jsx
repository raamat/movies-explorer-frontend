import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import "./NavIn.css";

function NavIn() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <nav className="nav-in">
        <ul className="nav-in__list">
          <li className="nav-in__item">
            <NavLink
              className={({ isActive }) =>
                `nav-in__link opacity ${isActive ? " nav-in__link__active" : ""}`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="nav-in__item">
            <NavLink
              className={({ isActive }) =>
                `nav-in__link opacity ${isActive ? " nav-in__link__active" : ""}`
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="nav-in__item">
            <Link className="nav-in__link nav-in__link_type_button opacity" to="/profile">
              Аккаунт
              <div className="nav-in__button-account"></div>
            </Link>
          </li>
        </ul>
        <button
          className="nav-in__button_burger opacity"
          onClick={() => setIsBurgerOpen(true)}
        ></button>
      </nav>
      <BurgerMenu isBurgerOpen={isBurgerOpen} onBurgerClose={() => setIsBurgerOpen(false)} />
    </>
  );
}

export default NavIn;

