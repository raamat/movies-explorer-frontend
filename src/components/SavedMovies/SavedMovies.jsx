import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./SavedMovies.css";

export default function SavedMovies({ isLoggedIn }) {
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchValue = " ";

   return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          searchValue={searchValue}
          isChecked={isChecked}
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
