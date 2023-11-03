import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState();
  const [currentUser, setCurrentUser] = useState({
    isAuth,
    isBurgerOpen,
    toggleIsBurgerOpen
  });

  function toggleIsBurgerOpen() {
    setIsBurgerOpen(true);
    alert('Hello! = ', isBurgerOpen)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/movies"
              element={<Movies toggle={toggleIsBurgerOpen} />}
            />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
