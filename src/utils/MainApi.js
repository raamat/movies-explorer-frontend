import fetchRequest from "./helpersApi";

const baseUrl = "https://api.movies.raamat.pw";

export function signInRequest({ email, password }) {
  return fetchRequest({
    url: `${baseUrl}/signin`,
    method: "POST",
    json: {
      email,
      password,
    },
  });
}

export function signUpRequest({ name, email, password }) {
  return fetchRequest({
    url: `${baseUrl}/signup`,
    method: "POST",
    json: {
      name,
      email,
      password,
    },
  });
}

export function getUserRequest() {
  return fetchRequest({
    url: `${baseUrl}/users/me`,
    method: "GET",
    isAuthRequired: true,
  });
}

export function updateUserRequest({ name, email }) {
  return fetchRequest({
    url: `${baseUrl}/users/me`,
    method: "PATCH",
    json: {
      name,
      email,
    },
    isAuthRequired: true,
  });
}

export function getMoviesRequest() {
  return fetchRequest({
    url: `${baseUrl}/movies`,
    method: "GET",
    isAuthRequired: true,
  });
}

export function saveMovieRequest({
  country,
  director,
  duration,
  year,
  description,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  image,
  movieId,
}) {
  return fetchRequest({
    url: `${baseUrl}/movies`,
    method: "POST",
    json: {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      image,
      movieId,
    },
    isAuthRequired: true,
  });
}

export function deleteMovieRequest(movieId) {
  return fetchRequest({
    url: `${baseUrl}/movies/${movieId}`,
    method: "DELETE",
    isAuthRequired: true,
  });
}
