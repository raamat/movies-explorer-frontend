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
        <MoviesCardList />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}
