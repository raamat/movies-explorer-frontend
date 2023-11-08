import Section from "../../Section/Section";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

export default function MoviesCardList({ cards }) {
  return (
    <Section classNameSection="card-list">
      <div className="card-list__table">
        {cards.map((card, index) => (
          <MoviesCard key={index} isLike={card} />
        ))}
      </div>
    </Section>
  );
}
