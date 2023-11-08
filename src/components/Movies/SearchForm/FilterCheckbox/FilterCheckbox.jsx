import "./FilterCheckbox.css";

export default function FilterCheckbox({ isChecked, onChecked }) {
  return (
    <div className="filter-checkbox__container">
      <input
        className="filter-checkbox__input"
        id={`filter-checkbox-new`}
        type="checkbox"
        value={isChecked}
        onChange={() => onChecked(!isChecked)}
      />
      <label
        className={`filter-checkbox__label${isChecked ? " filter-checkbox__checked" : ""}`}
        htmlFor={`filter-checkbox-new`}
      >
        <span className={`filter-checkbox__button`} />
      </label>
      <label htmlFor="filter-checkbox-new" className="filter-checkbox__text">
        Короткометражки
      </label>
    </div>
  );
}
