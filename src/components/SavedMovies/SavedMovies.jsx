import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getSavedMoviesRequest } from "../../utils/MainApi";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./SavedMovies.css";

export default function SavedMovies({ isLoggedIn }) {
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [searchValue, setSearchValue] = useState(" ");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearchButtonSubmit() {
    try {
      setIsLoading(true);
      if (savedMovies.length === 0) {
        const data = await getSavedMoviesRequest();
        setSavedMovies(data);
      }
    } catch {
      console.log("Ошибка");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    searchValue.length > 1 && setSearchValue(searchValue.trim());
  }, [searchValue]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isChecked={isChecked}
          handleSearchButtonSubmit={handleSearchButtonSubmit}
          isLoading={isLoading}
          setIsChecked={setIsChecked}
        />
        <MoviesCardList
          movies={savedMovies}
          isChecked={isChecked}
          isLoading={isLoading}
          searchValue={searchValue}
        />
      </main>
      <Footer />
    </>
  );
}
