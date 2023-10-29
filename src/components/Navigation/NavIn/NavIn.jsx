import { Link } from "react-router-dom";

import "./NavIn.css";

export default function NavIn() {
  return (
    <ul className="nav-in">
      <li className="nav-in__item">
        <Link className="nav-in__link opacity">Фильмы</Link>
      </li>
      <li>
        <Link className="nav-in__link nav-in__link_font-weight_400 opacity">Сохранённые фильмы</Link>
      </li>
      <li>
        <Link className="nav-in__link nav-in__link_type_button opacity">
          Аккаунт
        <div className="nav-in__button-account">
        </div>  
        </Link>
      </li>
    </ul>
  );
}
