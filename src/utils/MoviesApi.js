const requestURL = "https://api.nomoreparties.co/beatfilm-movies";

export async function getMoviesCard() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, " Что-то пошло не так...");
  }
}

