import Section from "../../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

import "./AboutMe.css";
import myPhoto from "../../../images/vitaly.jpg";

export default function AboutMe() {
  return (
    <Section classNameSection="about-me">
      <SectionTitle className="about-me__title" text="Студент" />
      <article className="about-me__article">
        <div className="about-me__description">
          <h3 className="about-me__subtitle">Виталий</h3>
          <h4 className="about-me__job-and-age">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__github-link opacity"
            href="https://github.com/raamat"
            target="_blank"
            rel="noreferer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Программист Виталий" />
      </article>
    </Section>
  );
}
