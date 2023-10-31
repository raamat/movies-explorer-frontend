import Photographer from "../../../images/photographer.jpg";

import "./MoviesCard.css";

const cardLike = false;

export default function MoviesCard() {
  return (
    <div className="card">
      <div className="card__title-container">
        <title className="card__title">В погоне за Бенкси hhhhhhhhhhhhh</title>
        <div className="card__time">0ч42м</div>
      </div>
      <img className="card__image" src={Photographer} alt="Фотограф"></img>
      <button className={cardLike ? "card__button card__button_like opacity" : "card__button opacity"}></button>
    </div>
  );
}
