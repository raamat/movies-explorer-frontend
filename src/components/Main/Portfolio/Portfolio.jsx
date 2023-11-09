import Section from "../../Section/Section";
import PortfolioLink from "./PortfolioLink/PortfolioLink";

import "./Portfolio.css";

export default function Portfolio() {
  return (
    <Section classNameSection="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <PortfolioLink
            link="https://github.com/raamat/how-to-learn"
            text="Статичный сайт"
          />
        </li>
        <li className="portfolio__list-item">
          <PortfolioLink
            link="https://raamat.github.io/russian-travel"
            text="Адаптивный сайт"
          />
        </li>
        <li className="portfolio__list-item">
          <PortfolioLink
            link="https://mesto.raamat.pw"
            text="Одностраничное приложение"
          />
        </li>
      </ul>
    </Section>
  );
}
