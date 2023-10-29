import './FilterCheckbox.css';

const isOn = true;

export default function FilterCheckbox() {
  return (
    <div className="filter-checkbox__container">
      <input
        className="filter-checkbox__input"
        id={`filter-checkbox-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#3DDC84" }}
        className="filter-checkbox__label"
        htmlFor={`filter-checkbox-new`}
      >    
        <span className={`filter-checkbox__button`} />
      </label>
      <p className="filter-checkbox__text">
        Короткометражки
      </p>
    </div>
  );
};