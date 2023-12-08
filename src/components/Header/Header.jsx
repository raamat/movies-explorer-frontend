import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

export default function Header({ isLoggedIn }) {
  const pathname = useLocation().pathname;
  return (
    <header className={`header ${!isLoggedIn || pathname === "/" ? "header_color_blue" : ""}`}>
      <div className="header__container">
        <Link className="header__logo opacity" to="/" />
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}
