import Section from "../Section/Section";
import MoviesCard from "./MoviesCard/MoviesCard";
import Message from "../Message/Message";
import Spacer from "../Spacer/Spacer";
import "./MoviesCardList.css";

export default function MoviesCardList({ filteredMovies }) {
  return (
    <Section classNameSection="card-list">
      {filteredMovies.length > 0 ? (
        <div className="card-list__table">
          {filteredMovies.map((card, index) => (
            <MoviesCard
              key={index}
              card={card}
            ></MoviesCard>
          ))}
        </div>
      ) : (
        <Message>
          <Spacer size={200} />
          Ничего не найдено
        </Message>
      )}
    </Section>
  );
}
