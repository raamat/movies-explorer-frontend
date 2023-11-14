import { useState } from "react";

import "./MoviesCard.css";

const apiURL = "https://api.nomoreparties.co/";

export default function MoviesCard({ isLike, card }) {
  const [cardLike, setCardLike] = useState(isLike);
  return (
    <div className="card">
      <div className="card__title-container">
        <h2 className="card__title">{card.nameRU}</h2>
        <div className="card__time">
          {Math.floor(card.duration / 60)}ч {card.duration % 60}м{" "}
        </div>
      </div>
      <img
        className="card__image"
        src={apiURL + card.image.url}
        alt={card.nameRU}
      ></img>
      <button
        className={
          cardLike
            ? "card__button card__button_like opacity"
            : "card__button opacity"
        }
        onClick={() => setCardLike(!cardLike)}
      ></button>
    </div>
  );
}
