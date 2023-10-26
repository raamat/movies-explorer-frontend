import { Link } from "react-router-dom";

import "./NavOut.css";

export default function NavOut() {
  return (
    <ul className="nav-out">
      <li className="nav-out__item">
        <Link className="nav-out__link opacity" to="/signup">
          Регистрация
        </Link>
      </li>
      <li>
        <Link
          className="nav-out__link nav-out__link_type_green-button opacity"
          to="/signin"
        >
          Войти
        </Link>
      </li>
    </ul>
  );
}
