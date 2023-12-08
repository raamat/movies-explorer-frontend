import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./SavedMovies.css";

export default function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList cards={new Array(3).fill(true)} />
        <div className="empty-block"></div>
      </main>
      <Footer />
    </>
  );
}
