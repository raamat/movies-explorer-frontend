import Section from "../../Section/Section";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <Section classNameSection='search-form'>
      <form className="search-form__block">
        <input className="search-form__input" placeholder="Фильм"/>
        <button className="search-form__button" type="submit">Поиск</button>
      </form>
    </Section>
  )
}