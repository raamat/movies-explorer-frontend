import useCount from "../../../hooks/useCount";

import Section from "../../Section/Section";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import "./MoviesCardList.css";

export default function MoviesCardList({ cards, isLoading }) {
  const count = useCount();
  return (
    <Section classNameSection="card-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="card-list__table">
          {cards.filter((item, index) => index < count).map((card, index) => (
            <MoviesCard key={index} isLike={card} card={card} />
          ))}
        </div>
      )}
    </Section>
  );
}
