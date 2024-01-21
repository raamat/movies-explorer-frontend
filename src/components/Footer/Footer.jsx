import "./Footer.css";
import FooterLink from "./FooterLink/FooterLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__block">
          <p className="footer__copyright">© 2024</p>
          <ul className="footer__links">
            <li>
              <FooterLink
                link={"https://practicum.yandex.ru"}
                text={"Яндекс.Практикум"}
              />
            </li>
            <li>
              <FooterLink link={"https://github.com/raamat"} text={"Github"} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
