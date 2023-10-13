import "./Portfolio.css";
import PortfolioLink from "../PortfolioLink/PortfolioLink";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li>
          <PortfolioLink
            link={"https://raamat.github.io/how-to-learn"}
            text={'Статичный сайт "Научиться учиться"'}
          />
        </li>
        <li>
          <PortfolioLink
            link={"https://raamat.github.io/russian-travel"}
            text={'Адаптивный сайт "Путешествия по России"'}
          />
        </li>
        <li>
          <PortfolioLink
            link={"https://mesto.raamat.pw"}
            text={"Одностраничное приложение Mesto"}
          />
        </li>
      </ul>
    </section>
  );
}
