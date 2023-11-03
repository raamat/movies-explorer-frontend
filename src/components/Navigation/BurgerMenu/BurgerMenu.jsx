import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { Link, NavLink } from "react-router-dom";

import "./BurgerMenu.css";

export default function BurgerMenu() {
  const isBurgerOpen = useContext(CurrentUserContext).isBurgerOpen;
  return (
    <div
      className={
        !isBurgerOpen ? `burger-menu` : `burger-menu burger-menu_opened`
      }
    >
      <main className="burger-menu__container">
        <button className="burger-menu__close-button"></button>
        <ul className="burger-menu__links">
          <li>
            <NavLink className="burger-menu__link" to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className="burger-menu__link opacity" to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className="burger-menu__link opacity" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </li>
          <li>
            <Link
              className="burger-menu__link burger-menu__link_type_button opacity"
              to="/profile"
            >
              Аккаунт
              <div className="burger-menu__link__button-account"></div>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
