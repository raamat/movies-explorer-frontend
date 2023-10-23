import Section from "../../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

import "./AboutProject.css";

export default function AboutProject() {
  return (
    <Section classNameSection="about-project">
      <SectionTitle className={"about-project__title"} text={"О проекте"} />
      <div className="about-project__description">
        <h3 className="about-project__subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 className="about-project__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-cell about-project__timeline-cell_background-color_green">
          1 неделя
        </div>
        <div className="about-project__timeline-cell about-project__timeline-cell_background-color_grey">
          4 недели
        </div>
        <div className="about-project__timeline-cell about-project__timeline-cell_type_title">Back-end</div>
        <div className="about-project__timeline-cell about-project__timeline-cell_type_title">Front-end</div>
      </div>
    </Section>
  );
}
