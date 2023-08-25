import React, {useState,} from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

import Header from "./Header";
import Footer from "./Footer";

function App() {

  const [isMenuActvite, setIsMenuActive] = useState(false);
  // сохраняем местоположение в переменную
  const location = useLocation();

  const footer =
    location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies';



  return (
    <div className="page">
      
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
      {footer && <Footer />}
    </div>
  );
}

export default App;
