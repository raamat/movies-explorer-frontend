import { Link, useNavigate } from "react-router-dom";

import "./Page404.css";

export default function Page404() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <section className="page-404">
      <h1 className="page-404__title">404</h1>
      <p className="page-404__text">Страница не найдена</p>
      <Link className="page-404__link opacity" onClick={goBack}>
        Назад
      </Link>
    </section>
  );
}
