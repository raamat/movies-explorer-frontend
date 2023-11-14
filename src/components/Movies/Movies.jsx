import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";

import { getMoviesCard } from "../../utils/MoviesApi";

import "./Movies.css";

export default function Movies() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getMoviesCard().then((data) => {
      setCards(data)
    })
  }, []);
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList cards={cards} />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}
