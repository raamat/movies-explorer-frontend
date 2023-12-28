import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useStorage";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";
import Message from "../Message/Message";

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
  const [isMoreButtonActive, setIsMoreButtonActive] = useState(false);

  /*

  // При помощи пользовательского хука useCount получаем объект из двух элементов:
  //   showCards - количество карточек для отображения
  //   addCards - количество карточек добавляемых при клике на кнопку "Ещё"
  const { showCards, addCards } = useCount();

  function toggleDurationMovies() {
    if (isChecked) return DURATION_SHORT_MOVIES;
    else return DURATION_SHORT_MOVIES * 10;
  }

  // При помощи функции filterMovies найдем фильмы, и вслучае, если массив буден не пустой,
  // сохраним в стейт-переменной searchMovies и localStorage
  function filterMovies() {
    return allMovies
      .filter((movie, index) => movie.duration <= toggleDurationMovies())
      .filter((item, index) => index < showCards)
      .filter((movie, index) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

  useEffect(() => {
    const mas = filterMovies();
    //mas.length !== 0 && setSearchMovies(JSON.stringify(mas));
    mas.length !== 0 ? (setSearchMovies(mas)) : (setSearchMovies(""));
  }, [searchValue]);

  useEffect(() => {
    setCountCards(showCards);
  }, [countCards, showCards]);

  */

  function handleMoreButton() {
    //showCards = showCards + addCards;
    //setCountCards(showCards);
  }



  async function handleButtonSubmit() {
    try {
      setIsLoading(true);
      // Данные надо брать из локального хранилища?
      const data = await getMoviesCard();
      setAllMovies(data);
    } catch {
      console.log("Ошибка");
    } finally {
      setIsLoading(false);
    }
  }
     
 /* 
 useEffect(() => {
   console.log('Кол-во фильмов для отображения', showCards);
   console.log('Кол-во найденных фильмов', searchMovies.length);
   showCards < searchMovies.length ? setIsMoreButtonActive(true) : setIsMoreButtonActive(false);
 }, [addCards])
 */

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
      </main>
      <Footer />
    </>
  );
}
