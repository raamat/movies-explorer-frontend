import Section from "../../Section/Section";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import { DURATION_SHORT_MOVIES } from "../../../utils/constants";

import "./MoviesCardList.css";

export default function MoviesCardList({
  cards,
  isChecked,
  isLoading,
  searchValue,
  searhMovies,
  showCards,
}) {
  function toggleDurationMovies() {
    if (isChecked) return DURATION_SHORT_MOVIES
      else return DURATION_SHORT_MOVIES * 10
  }
  return (
    <>
      {
        searchValue && <Section classNameSection="card-list">
          {isLoading ? (
            <Preloader />
          ) : (
            <div className="card-list__table">
              {cards
                .filter(
                  (movie, index) =>
                    // movie.duration <= DURATION_SHORT_MOVIES && isChecked
                    movie.duration <= toggleDurationMovies()
                )
                .filter((item, index) => index < showCards)
                .filter((movie, index) => 
                  movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((card, index) => (
                  <MoviesCard key={index} isLike={card} card={card} />
                ))}
            </div>
          )}
        </Section>
      }
    </>
  );
}
