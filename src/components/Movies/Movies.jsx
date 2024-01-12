import { useState } from "react";
import { useLocalStorage } from "../../hooks/useStorage";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { getMoviesCard } from "../../utils/MoviesApi";

import "./Movies.css";

export default function Movies({ isLoggedIn, handleAddMovie }) {
  const [searchValue, setSearchValue] = useLocalStorage("searchValue", "");
  const [isChecked, setIsChecked] = useLocalStorage("isChecked", false);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useLocalStorage("allMovies", []);

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
          handleSearchButtonSubmit={handleSearchButtonSubmit}
          isChecked={isChecked}
          isLoading={isLoading}
          setIsChecked={setIsChecked}
        />
        <MoviesCardList
          movies={allMovies}
          isChecked={isChecked}
          isLoading={isLoading}
          searchValue={searchValue}
          handleAddMovie={handleAddMovie}
        />
      </main>
      <Footer />
    </>
  );
}
