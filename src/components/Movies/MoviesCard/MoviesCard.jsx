import { useState } from "react";
import Photographer from "../../../images/photographer.jpg";

import "./MoviesCard.css";

export default function MoviesCard({ isLike }) {
  const [cardLike, setCardLike] = useState(isLike);
  return (
    <div className="card">
      <div className="card__title-container">
        <h2 className="card__title">В погоне за Бенкси hhhhhhhhhhhhh</h2>
        <div className="card__time">0ч42м</div>
      </div>
      <img className="card__image" src={Photographer} alt="Фотограф"></img>
      <button
        className={cardLike ? "card__button card__button_like opacity" : "card__button opacity"}
        onClick={() => setCardLike(!cardLike)}
      ></button>
    </div>
  );
}
