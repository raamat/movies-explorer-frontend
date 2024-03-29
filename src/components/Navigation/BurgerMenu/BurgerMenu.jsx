import { Link, NavLink } from "react-router-dom";

import "./BurgerMenu.css";

export default function BurgerMenu({ isBurgerOpen, onBurgerClose }) {
  return (
    <div className={`burger-menu${isBurgerOpen ? " burger-menu_opened" : ""}`}>
      <nav className="burger-menu__container">
        <button
          className="burger-menu__close-button opacity"
          onClick={onBurgerClose}
        ></button>
        <ul className="burger-menu__links">
          <li className="burger-menu__item">
            <NavLink className="burger-menu__link opacity" to="/">
              Главная
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink className="burger-menu__link opacity" to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink className="burger-menu__link opacity" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link className="burger-menu__button opacity" to="/profile">
          Аккаунт
        </Link>
      </nav>
    </div>
  );
}
