import { useState, useEffect } from "react";
import useCount from "../../hooks/useCount";
// import useStorage from "../../hooks/useStor";
import { useLocalStorage } from "../../hooks/useStorage";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";

import { getMoviesCard } from "../../utils/MoviesApi";

import { DURATION_SHORT_MOVIES } from "../../utils/constants";

import "./Movies.css";

export default function Movies({ isLoggedIn }) {
  // const allMoviesFromStorage = localStorage.getItem('movies');
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useLocalStorage("searchValue", "");
  const [isChecked, setIsChecked] = useLocalStorage("isChecked", false);
  // const [isChecked, setIsChecked] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchValid, setIsSearchValid] = useState(false);
  const [countCards, setCountCards] = useState({});
  const [searhMovies, setSearchMovies] = useLocalStorage("searhMovies", []);

  // При помощи пользовательского хука useCount получаем объект из двух элементов:
  //   showCards - количество карточек для отображения
  //   addCards - количество карточек добавляемых при клике на кнопку "Ещё"
  const cardsObject = useCount();

  function toggleDurationMovies() {
    if (isChecked) return DURATION_SHORT_MOVIES;
    else return DURATION_SHORT_MOVIES * 10;
  }

  // При помощи функции searhMovies найдем фильмы, и вслучае, если массив буден не пустой,
  // сохраним в стейт-переменной searhMovies и localStorage
  function filterMovies() {
    return cards
      .filter((movie, index) => movie.duration <= toggleDurationMovies())
      .filter((item, index) => index < cardsObject.showCards)
      .filter((movie, index) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

  useEffect(() => {
    const mas = filterMovies();
    mas.length !== 0 && setSearchMovies(JSON.stringify(mas));
  });

  useEffect(() => {
    setCountCards(cardsObject.showCards);
  }, [countCards, cardsObject]);

  function handleMoreButton() {
    cardsObject.showCards = cardsObject.showCards + cardsObject.addCards;
    setCountCards(cardsObject.showCards);
  }

  useEffect(() => {
    getMoviesCard()
      .then((data) => {
        localStorage.setItem("allMovies", JSON.stringify(data));
        setCards(JSON.parse(localStorage.getItem("allMovies")));
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setIsSearchValid={setIsSearchValid}
        />
        <MoviesCardList
          cards={cards}
          isChecked={isChecked}
          isLoading={isLoading}
          searchValue={searchValue}
          searhMovies={searhMovies}
          showCards={countCards}
        />
        {searchValue && <MoreButton onClick={handleMoreButton} />}
      </main>
      <Footer />
    </>
  );
}
