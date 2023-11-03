import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import "./NavIn.css";

function NavIn() {
  return (
    <>
      <ul className="nav-in">
        <li className="nav-in__item">
          <Link className="nav-in__link opacity" to="/movies">
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            className="nav-in__link nav-in__link_font-weight_400 opacity"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li>
          <Link
            className="nav-in__link nav-in__link_type_button opacity"
            to="/profile"
          >
            Аккаунт
            <div className="nav-in__button-account"></div>
          </Link>
        </li>
      </ul>
      <button className="nav-in__button_burger opacity"></button>
      <BurgerMenu />
    </>
  );
}

export default NavIn;
