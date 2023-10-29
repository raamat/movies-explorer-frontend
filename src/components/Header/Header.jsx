import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header({ isAuth = true }) {
  return (
    <header className={`header ${!isAuth ? 'header_color_blue' : ''}`}>
      <div className="header__container">
        <Link className="header__logo opacity" to="/" />
        <Navigation isAuth={isAuth} />
      </div>
    </header>
  );
}
