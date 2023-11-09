import { useState } from "react";
import Section from "../../Section/Section";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export default function SearchForm({ onSubmit }) {
  const [isChecked, setIsChecked] = useState();

  function onPrevSubmit(e) {
    e.preventDefault();
    onSubmit?.();
  }
  return (
    <Section classNameSection="search-form">
      <form className="search-form__block" onSubmit={onPrevSubmit}>
        <input className="search-form__input" type="search" placeholder="Фильм" />
        <button className="search-form__button opacity" type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox isChecked={isChecked} onChecked={setIsChecked} />
    </Section>
  );
}
