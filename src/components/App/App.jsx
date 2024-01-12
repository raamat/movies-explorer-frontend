import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useStorage";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getUserRequest, getSavedMoviesRequest } from "../../utils/MainApi";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  const [savedMovies, setSavedMovies] = useLocalStorage("savedMovies", []);

  useEffect(() => {
    if (isLoggedIn) {
      async function fetchData() {
        try {
          const data = await getUserRequest();
          setCurrentUser(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && savedMovies.length === 0) {
      async function fetchData() {
        try {
          const movie = await getSavedMoviesRequest();
          setSavedMovies(movie);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }
  }, [isLoggedIn]);

  function clearLocalStorageAndStates() {
    localStorage.clear();
    setIsLoggedIn(false);
    setSavedMovies([]);
    setCurrentUser({});
    removeToken();
  }

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  return (
    <div className="page">
      {isLoggedIn !==undefined && (
        <CurrentUserContext.Provider
          value={{ currentUser, setCurrentUser, savedMovies, setSavedMovies }}
        >
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
                <Route
                  path="/signup"
                  element={
                    !isLoggedIn ? (
                      <Register
                        setIsLoggedIn={setIsLoggedIn}
                        setToken={setToken}
                      />
                    ) : (
                      <Movies isLoggedIn={isLoggedIn} />
                    )
                  }
                />
                <Route
                  path="/signin"
                  element={
                    !isLoggedIn ? (
                      <Login
                        setIsLoggedIn={setIsLoggedIn}
                        setToken={setToken}
                        setCurrentUser={setCurrentUser}
                      />
                    ) : (
                      <Movies
                        isLoggedIn={isLoggedIn}
                        savedMovies={savedMovies}
                        setSavedMovies={setSavedMovies}
                      />
                    )
                  }
                />
                <Route
                  path="/profile"
                  element={
                    isLoggedIn ? (
                      <Profile
                        isLoggedIn={isLoggedIn}
                        clearLocalStorageAndStates={clearLocalStorageAndStates}
                      />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="/movies"
                  element={
                    isLoggedIn ? (
                      <Movies isLoggedIn={isLoggedIn} />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    isLoggedIn ? (
                      <SavedMovies isLoggedIn={isLoggedIn} />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </BrowserRouter>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}
