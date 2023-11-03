import Section from "../../Section/Section";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <Section classNameSection='search-form'>
      <form className="search-form__block">
        <input className="search-form__input" type="search" placeholder="Фильм"/>
        <button className="search-form__button opacity" type="submit">Поиск</button>
      </form>
      <FilterCheckbox />
    </Section>
  )
}