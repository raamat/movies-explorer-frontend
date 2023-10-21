import SectionTitle from "../SectionTitle/SectionTitle";

import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <SectionTitle className={"about-me__title"} text={"Студент"} />
        <h3 className="about-me__title">Виталий</h3>
        <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
      </div>
    </section>
  );
}
