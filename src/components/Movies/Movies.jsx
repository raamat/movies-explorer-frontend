import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCard from "./MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";

import "./Movies.css";

export default function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCard />
      <Footer />
    </div>
  );
}
