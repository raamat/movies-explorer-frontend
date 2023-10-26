import Photographer from "../../../images/photographer.jpg";

import "./MoviesCard.css";

export default function MoviesCard() {
  return (
    <div className="card">
      <div className="card__title-container">
        <title className="card__title">В погоне за Бенкси</title>
        <div className="card__time">0ч 42м</div>
      </div>
      <img className="card__image" src={Photographer} alt="Фотограф"></img>
      <button>Сохранить</button>
    </div>
  );
}
