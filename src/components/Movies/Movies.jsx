import { useState, useEffect } from "react";
import useCount from "../../hooks/useCount";
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

  const [countCards, setCountCards] = useState({});

  // Получаем объект из двух элементов: 
  //   showCards - количество карточек для отображения
  //   addCards - количество карточек добавляемых при клике на кнопку "Ещё"
  const cardsObject = useCount();

  useEffect(() => {
    setCountCards(cardsObject.showCards)
      console.log(countCards)
  }, [countCards, cardsObject])

  function handleMoreButton() {
    cardsObject.showCards = cardsObject.showCards + cardsObject.addCards;
    setCountCards(cardsObject.showCards);
    console.log("Карточка добавлена");
  }

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
        <MoviesCardList cards={cards} showCards={countCards}/>
        <MoreButton onClick={handleMoreButton}/>
      </main>
      <Footer />
    </>
  );
}
