import { Link, NavLink } from "react-router-dom";

import "./BurgerMenu.css";

export default function BurgerMenu() {
  return (
    <div className="burger-menu">
      <div className="burger-menu__icon"></div>
      <ul className="burger-menu__links">
        <li>
          <NavLink className="burger-menu__link">Главная</NavLink>
        </li>
        <li>
          <NavLink className="burger-menu__link opacity">Фильмы</NavLink>
        </li>
        <li>
          <NavLink className="burger-menu__link opacity">Сохранённые фильмы</NavLink>
        </li>
        <li>
          <Link className="burger-menu__link burger-menu__link__link_type_button opacity">
            Аккаунт
          <div className="burger-menu__link__button-account">
          </div>  
          </Link>
        </li>
      </ul>
    </div>
  )
}