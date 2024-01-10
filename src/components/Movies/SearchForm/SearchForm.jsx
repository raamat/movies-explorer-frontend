import { useEffect, useState } from "react";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import Section from "../../Section/Section";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import ErrorMessage from "../../Message/Message";

import "./SearchForm.css";

export default function SearchForm({
  searchValue,
  setSearchValue,
  isChecked,
  handleSearchButtonSubmit,
  setIsChecked,
}) {
  const { values, setValues, handleChange, isFormValid } =
    useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setValues({ search: searchValue });
  }, []);

  useEffect(() => {
    values.search && setErrorMessage("");
  }, [values.search]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (isFormValid || values.search) {
      handleSearchButtonSubmit();
      setSearchValue(values.search);
    } else {
      setErrorMessage("Нужно ввести ключевое слово");
    }
  }

  return (
    <Section classNameSection="search-form">
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <form
        className="search-form__block"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <input
          className="search-form__input"
          type="search"
          name="search"
          value={values.search}
          onChange={handleChange}
          placeholder="Фильм"
          required
        />
        <button className="search-form__button opacity" type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox isChecked={isChecked} onChecked={setIsChecked} />
    </Section>
  );
}
