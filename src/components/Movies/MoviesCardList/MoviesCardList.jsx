import useFilter from "../../../hooks/useFilter";
import useSlice from "../../../hooks/useSlice";
import Section from "../../Section/Section";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Message from "../../Message/Message";
import Spacer from "../../Spacer/Spacer";
import MoreButton from "../MoreButton/MoreButton";

import { DURATION_SHORT_MOVIES } from "../../../utils/constants";

import "./MoviesCardList.css";

export default function MoviesCardList({
  allMovies,
  isChecked,
  isLoading,
  searchValue,
}) {
  const filteredMovies = useFilter(
    allMovies,
    searchValue,
    isChecked,
    DURATION_SHORT_MOVIES
  );

  const { array, handleClick, isButtonActive } = useSlice(filteredMovies);

  return (
    <>
      {searchValue && (
        <Section classNameSection="card-list">
          {isLoading ? (
            <Preloader />
          ) : filteredMovies.length > 0 ? (
            <>
              <div className="card-list__table">
                {array.map((card, index) => (
                  <MoviesCard
                    key={index}
                    isLike={card}
                    card={card}
                  ></MoviesCard>
                ))}
              </div>
            </>
          ) : (
            <Message>
              <Spacer size={200} />
              Ничего не найдено
              <Spacer size={150} />
            </Message>
          )}
        </Section>
      )}
      {isButtonActive && <MoreButton onClick={handleClick}></MoreButton>}
    </>
  );
}
