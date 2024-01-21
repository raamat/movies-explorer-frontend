import { useContext, useState } from "react";
import useFilter from "../../hooks/useFilter";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getSavedMoviesRequest } from "../../utils/MainApi";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { DURATION_SHORT_MOVIES } from "../../utils/constants";
import "./SavedMovies.css";

export default function SavedMovies({ isLoggedIn }) {
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [searchValue, setSearchValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filteredMovies = useFilter(
    savedMovies,
    searchValue,
    isChecked,
    DURATION_SHORT_MOVIES
  );

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

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isChecked={isChecked}
          handleSearchButtonSubmit={handleSearchButtonSubmit}
          setIsChecked={setIsChecked}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList filteredMovies={filteredMovies} />
        )}
      </main>
      <Footer />
    </>
  );
}
