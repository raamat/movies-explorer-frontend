import "./Footer.css";
import FooterLink from "./FooterLink/FooterLink";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <FooterLink
        link={"https://practicum.yandex.ru"}
        text={"Яндекс.Практикум"}
      />
      <FooterLink link={"https://github.com/raamat"} text={"Github"} />
      <p className="footer__copyright">© 2023</p>
    </footer>
  );
}
