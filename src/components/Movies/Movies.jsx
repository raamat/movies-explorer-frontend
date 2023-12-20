import { useState, useEffect } from "react";
import useCount from "../../hooks/useCount";
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
  // const [isChecked, setIsChecked] = useState();
  const [searchValue, setSearchValue] = useLocalStorage("searchValue", "");
  const [isChecked, setIsChecked] = useLocalStorage("isChecked", false);
  const [isLoading, setIsLoading] = useState(false);
  const [countCards, setCountCards] = useState({});
  const [allMovies, setAllMovies] = useLocalStorage("allMovies", []);
  const [searchMovies, setSearchMovies] = useLocalStorage("searchMovies", []);

  // При помощи пользовательского хука useCount получаем объект из двух элементов:
  //   showCards - количество карточек для отображения
  //   addCards - количество карточек добавляемых при клике на кнопку "Ещё"
  const cardsObject = useCount();

  function toggleDurationMovies() {
    if (isChecked) return DURATION_SHORT_MOVIES;
    else return DURATION_SHORT_MOVIES * 10;
  }

  // При помощи функции searchMovies найдем фильмы, и вслучае, если массив буден не пустой,
  // сохраним в стейт-переменной searchMovies и localStorage
  function filterMovies() {
    return allMovies
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

  async function handleButtonSubmit() {
    try {
      console.log("Запрос полетел");
      setIsLoading(true);
      // Данные надо брать из локального хранилища?
      const data = await getMoviesCard();
      setAllMovies(data);
      console.log("Запрос прилетел!!!");
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
          handleButtonSubmit={handleButtonSubmit}
          isChecked={isChecked}
          isLoading={isLoading}
          setIsChecked={setIsChecked}
          setSearchMovies={setSearchMovies}
        />
        <MoviesCardList
          allMovies={allMovies}
          isChecked={isChecked}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          searchValue={searchValue}
          searchMovies={searchMovies}
          showCards={countCards}
        />
        {searchMovies && <MoreButton onClick={handleMoreButton} />}
      </main>
      <Footer />
    </>
  );
}
