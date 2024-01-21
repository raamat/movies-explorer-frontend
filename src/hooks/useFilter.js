import { useEffect, useState } from "react";

export default function useFilter(
  movies,
  searchValue,
  isCheckedShortMovies,
  durationShortMovies
) {
  const [arr, setArr] = useState([]);

  function findAllMovies() {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  function findShortMovies() {
    return findAllMovies().filter(
      (movie) => movie.duration <= durationShortMovies
    );
  }

  useEffect(() => {
    isCheckedShortMovies ? setArr(findShortMovies()) : setArr(findAllMovies());
  }, [movies, searchValue, isCheckedShortMovies, durationShortMovies]);

  return arr;
}
