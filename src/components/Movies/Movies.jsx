import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";
import Footer from "../Footer/Footer";

import "./Movies.css";

export default function Movies() {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList cards={new Array(12).fill(false).map((_, index) => index % 2 === 0)} />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}
