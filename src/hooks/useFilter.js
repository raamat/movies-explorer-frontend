import { useEffect, useState } from "react";

export default function useFilter(
  allMovies,
  searchValue,
  isCheckedShortMovies,
  durationShortMovies
) {
  const [arr, setArr] = useState([]);

  function findAllMovies() {
    return allMovies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  function findShortMovies() {
    return findAllMovies().filter(
      (movie) => movie.duration <= durationShortMovies
    );
  }

  //return isCheckedShortMovies ? findShortMovies() : findAllMovies();
  useEffect(() => {
    isCheckedShortMovies ? setArr(findShortMovies()) : setArr(findAllMovies());
  }, [allMovies, searchValue, isCheckedShortMovies, durationShortMovies]);

  return arr;
}
