import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  saveMovieRequest,
  deleteMovieRequest,
} from "../../../utils/MainApi";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./MoviesCard.css";

const apiURL = "https://api.nomoreparties.co/";

export default function MoviesCard({ card }) {
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const location = useLocation();

  const isLiked = savedMovies.some((movie) => movie.movieId === card.id);

  async function handleAddMovie(card) {
    const newCard = {
      ...card,
      image: `${apiURL + card.image.url}`,
      thumbnail: `${apiURL + card.image.formats.thumbnail.url}`,
      movieId: card.id,
    };
    try {
      const data = await saveMovieRequest(newCard);
      setSavedMovies([...savedMovies, data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteMovie(card) {
    try {
      const movie = savedMovies.find(
        (mv) => mv.movieId === card.id || mv._id === card._id
      );
      await deleteMovieRequest(movie._id);
      setSavedMovies((cards) =>
        cards.filter((savedMovies) => savedMovies._id !== movie._id)
      );
    } catch (err) {
      console.log(err);
    }
  }

  function handleCardButtonClick(card) {
    location.pathname === "/saved-movies" || isLiked
      ? handleDeleteMovie(card)
      : handleAddMovie(card);
  }

  return (
    <div className="card">
      <div className="card__title-container">
        <h2 className="card__title">{card.nameRU}</h2>
        <div className="card__time">
          {Math.floor(card.duration / 60)}ч {card.duration % 60}м{" "}
        </div>
      </div>
      <a
        className="card__trailer-link"
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          src={`${
            location.pathname === "/movies"
              ? `${apiURL + card.image.url}`
              : `${card.image}`
          }`}
          alt={card.nameRU}
        ></img>
      </a>
      <button
        className={
          isLiked || location.pathname === "/saved-movies"
            ? "card__button card__button_like opacity"
            : "card__button opacity"
        }
        onClick={() => handleCardButtonClick(card)}
      ></button>
    </div>
  );
}
