import fetchRequest from "./helpersApi";

const requestURL = "https://api.nomoreparties.co/beatfilm-movies";

export function getMoviesCard() {
  return fetchRequest({
    url: `${requestURL}`,
    metod: "GET",
  })
}