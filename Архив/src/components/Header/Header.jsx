import { Link } from "react-router-dom";

import "./Header.css";
import "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link className="header__link" to="/signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link className="header__link header__link_green-button" to="/signin">
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
