import { useState } from "react";
import { useLocalStorage } from "../../hooks/useStorage";
import useFilter from "../../hooks/useFilter";
import useSlice from "../../hooks/useSlice";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoviesCardList/MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import { getMoviesCard } from "../../utils/MoviesApi";
import { DURATION_SHORT_MOVIES } from "../../utils/constants";
import "./Movies.css";

export default function Movies({ isLoggedIn, handleAddMovie }) {
  const [searchValue, setSearchValue] = useLocalStorage("searchValue", "");
  const [isChecked, setIsChecked] = useLocalStorage("isChecked", false);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useLocalStorage("allMovies", []);

  const filteredMovies = useFilter(
    allMovies,
    searchValue,
    isChecked,
    DURATION_SHORT_MOVIES
  );

  const [slicedMovies, handleClick, isButtonActive] = useSlice(filteredMovies);

  async function handleSearchButtonSubmit() {
    try {
      setIsLoading(true);
      if (allMovies.length === 0) {
        const data = await getMoviesCard();
        setAllMovies(data);
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
      <main className="movies">
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
          !!searchValue && (
            <MoviesCardList
              filteredMovies={slicedMovies}
              handleAddMovie={handleAddMovie}
            />
          )
        )}
        {!isLoading && isButtonActive && <MoreButton onClick={handleClick} />}
      </main>
      <Footer />
    </>
  );
}
