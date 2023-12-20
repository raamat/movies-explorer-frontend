import { useState } from "react";
import { useLocalStorage } from "../../../hooks/useStorage";
import useArray from "../../../hooks/useArray";

import "./MoviesCard.css";

const apiURL = "https://api.nomoreparties.co/";

export default function MoviesCard({ isLike, card }) {
  const [cardLike, setCardLike] = useState(!isLike);
  const [saveMovies, setSaveMovies] = useLocalStorage("saveMovies", []);
  const {array, setArray, push, filter, update, remove, clear} = useArray([]);

  /*

  function push(element) {
    setSaveMovies(a => [...a, element])
}*/

  //setSaveMovies("");
  
  function handleClick() {
    setCardLike(!cardLike);
    !cardLike ? console.log(`Карточка id: ${card.id} сохранена`) : console.log(`Карточка id: ${card.id} удалена`)
    //!cardLike ? setSaveMovies(saveMovies => [...saveMovies, card]) : setSaveMovies("");
    //setSaveMovies(oldValue  => [...oldValue, card]) 
    //push(card);
    //setSaveMovies(card);
    //console.log(array.length)
  }
  return (
    <div className="card">
      <div className="card__title-container">
        <h2 className="card__title">{card.nameRU}</h2>
        <div className="card__time">
          {Math.floor(card.duration / 60)}ч {card.duration % 60}м{" "}
        </div>
      </div>
      <a className="card__trailer-link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={apiURL + card.image.url}
          alt={card.nameRU}
        ></img>
      </a>
      <button
        className={
          cardLike
            ? "card__button card__button_like opacity"
            : "card__button opacity"
        }
        // onClick={() => setCardLike(!cardLike)}
        onClick={handleClick}
      ></button>
    </div>
  );
}
