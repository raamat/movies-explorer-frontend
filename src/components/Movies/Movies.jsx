import { useState, useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";

import { getMoviesCard } from "../../utils/MoviesApi";

import "./Movies.css";

export default function Movies() {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useStorage('searchValue', "");

  useEffect(() => {
    getMoviesCard().then((data) => {
      setCards(data);
      localStorage.setItem('allMovies', JSON.stringify(data));
    });
  }, []);

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
        <MoviesCardList cards={cards} />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}
