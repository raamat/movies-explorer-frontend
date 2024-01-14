import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  movies,
  isChecked,
  isLoading,
  searchValue,
  handleAddMovie,
}) {
  const filteredMovies = useFilter(
    movies,
    searchValue,
    isChecked,
    DURATION_SHORT_MOVIES
  );

  const location = useLocation();

  const {
    array: slicedMovies,
    handleClick,
    isButtonActive,
  } = useSlice(filteredMovies);

  const [renderArr, setRenderArr] = useState([]);

  useEffect(() => {
    location.pathname === "/movies"
      ? setRenderArr(slicedMovies)
      : setRenderArr(filteredMovies);
  }, [slicedMovies]);

  return (
    <>
      {searchValue && (
        <Section classNameSection="card-list">
          {isLoading ? (
            <Preloader />
          ) : renderArr.length > 0 ? (
            <>
              <div className="card-list__table">
                {renderArr.map((card, index) => (
                  <MoviesCard
                    key={index}
                    isLike={card}
                    card={card}
                    handleAddMovie={handleAddMovie}
                  ></MoviesCard>
                ))}
              </div>
            </>
          ) : (
            <Message>
              <Spacer size={200} />
              Ничего не найдено
            </Message>
          )}
        </Section>
      )}
      {isButtonActive && location.pathname === "/movies" && (
        <MoreButton onClick={handleClick}></MoreButton>
      )}
    </>
  );
}
