import { useState } from "react";
import Section from "../../Section/Section";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export default function SearchForm({
  searchValue,
  setSearchValue,
  isChecked,
  setIsChecked,
  setIsSearchValid
}) {

  const [inputError, setInputError] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function OkInput() {
    alert("Все ОК");
    setIsSearchValid(searchValue);
  }

  function errorEmptyInput() {
    alert("Нужно ввести ключевое слово");
  }

  return (
    <Section classNameSection="search-form">
      <form className="search-form__block" onSubmit={handleFormSubmit}>
        <input
          className="search-form__input"
          type="search"
          value={searchValue}
          // Сейчас информация из инпута сразу записывается в localStorage, даже если ничего на найдено
          // Должна записываться только при непустом поиске?
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Фильм"
        />
        <button
          className="search-form__button opacity"
          type="submit"
          onClick={searchValue ? OkInput : errorEmptyInput}
        >
          Поиск
        </button>
      </form>
      <FilterCheckbox isChecked={isChecked} onChecked={setIsChecked} />
    </Section>
  );
}
