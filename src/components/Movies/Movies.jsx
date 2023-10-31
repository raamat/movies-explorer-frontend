import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Section from "../Section/Section";

import "./Movies.css";

export default function Movies() {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList/>
        <Section classNameSection="button">
          <button className="movies__button">Ещё</button>
        </Section>
      </main>
      <Footer />
    </>
   
  );
}
