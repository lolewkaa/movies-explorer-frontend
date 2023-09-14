import React, { useEffect, useState, useCallback } from "react";
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Main from "./Main/Main";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import * as auth from "../utils/Auth";
import { moviesApi } from '../utils/MoviesApi'
import { mainApi } from "../utils/MainApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from './NotFound'
import ProtectedRouteElement from "../utils/ProtectedRoute";
import AuthRoute from '../utils/AuthRoute'

function App() {
  const [errorMessage, isErrorMessage] = useState({
    errMessage: '',
  });
  const [saveMessage, isSaveMessage] = useState({
    textMessage: '',
  })
  //const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  // const [initalCards, setInitalCards] = useState([]);
  //
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([]);
  const [saveMovies,setSaveMovies] = useState([]);
  const [isBlockInput, setIsBlockInput] = useState(false);
  const [isLiked, setliked] = useState(false);
  const navigate = useNavigate();
 
  const checkToken = useCallback(() => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      
      auth
        .getContent(jwt)
        .then((res) => {
          const { _id, name, email } = res;
          setStateIsLogin({
            isLoggedIn: true,
          });
          setCurrentUser({ _id, name, email });
        })
        
        .catch((error) => console.log(`Ошибка: ${error}`));
    } 
    
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  const [stateIsLogin, setStateIsLogin] = useState(
    JSON.parse(localStorage.getItem('stateIsLogin')) ||
    { isLoggedIn: false }
  );

  useEffect(() => {
    localStorage.setItem('stateIsLogin', JSON.stringify(stateIsLogin));
  }, [stateIsLogin]);


  const handleRegister = ({ name, email, password }) => {
    setIsBlockInput(true)
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        navigate("/signin");
      })
      .catch((error) => {
        isErrorMessage({
          errMessage: '',
        });
        setIsBlockInput(false)
        if (error === `Ошибка: 409`) {
          isErrorMessage({
            errMessage: 'Пользователь с таким email уже существует.',
          });
        }
        if (error === `Ошибка: 500`) {
          isErrorMessage({
            errMessage: 'При регистрации пользователя произошла ошибка.',
          });
        }
      })
      
  };
 
  const handleLogin = ({ email, password }) => {
    setIsBlockInput(true)
    auth
      .authorization(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          checkToken();
        }
        setStateIsLogin({
          isLoggedIn: true,
        });
        navigate("/movies");
      })
      .catch((error) => {
        isErrorMessage({
          errMessage: '',
        });
        setIsBlockInput(false)
        if (error === `Ошибка: 401`) {
          isErrorMessage({
            errMessage: 'Вы ввели неправильный логин или пароль.',
          });
        }
        if (error === `Ошибка: 500`) {
          isErrorMessage({
            errMessage: 'При авторизации произошла ошибка. Переданный токен некорректен.',
          });
        }
      })
  };

 function handleUpdateProfile({ name, email }) {
  setIsBlockInput(true)
   mainApi
     .changeUserInfo( name, email)
     .then((res) => {
       setCurrentUser({
        name: res.name,
        email: res.email,
      });
      isSaveMessage({
        textMessage: 'Данные успешно изменены!'
      })
      isErrorMessage({
        errMessage: '',
      });
     })
     .catch((error) => {
      isErrorMessage({
        errMessage: '',
      });
      setIsBlockInput(false)
      if (error === `Ошибка: 400`) {
        isErrorMessage({
          errMessage: 'Пользователь с таким email уже существует.',
        });
      }
      if (error === `Ошибка: 500`) {
        isErrorMessage({
          errMessage: 'При обновлении профиля произошла ошибка.',
        });
      }
    })
}
  //очищает хранилище и стейт, отвечающий за состояние авторизации
  function signOut() {
    // localStorage.removeItem("jwt");
    // localStorage.removeItem('stateIsLogin')
    // localStorage.removeItem('findMovies')
    // localStorage.removeItem('allMovies')
    // localStorage.removeItem('query')
    // localStorage.removeItem('short')
    // localStorage.removeItem('allMoviesSave')
    localStorage.clear()
    
    setStateIsLogin({
      isLoggedIn: false,
    });
    setCurrentUser({
      name: '',
      email: '',
    });
    navigate('/');
   
  }
  
  // сохраняем местоположение в переменную
  const location = useLocation();

  const footer =
    location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies';

    const header =
    location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile';

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
    <div className="page">
     {header && <Header  isLoggedIn={stateIsLogin.isLoggedIn} />}
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        
       <Route path='/movies' 
       element={<ProtectedRouteElement isLoggedIn={stateIsLogin.isLoggedIn}>
       <Movies 
             movies={movies}
             saveMovies={saveMovies}
             setSaveMovies={setSaveMovies}
             isLoading={isLoading}
             setIsLoading={setIsLoading}
             isLiked={isLiked}
             setliked={setliked}
           />
       </ProtectedRouteElement>}
       />
        <Route
          path='/saved-movies'
          element={<ProtectedRouteElement isLoggedIn={stateIsLogin.isLoggedIn}>
          <SavedMovies 
            movies={movies}
            saveMovies={saveMovies}
            setSaveMovies={setSaveMovies}
            isLiked={isLiked}
             setliked={setliked}
          />
          </ProtectedRouteElement>}
        />
        <Route
          path='/signup'
          element={<AuthRoute isLoggedIn={stateIsLogin.isLoggedIn}> 
          <Register 
          onRegister={handleRegister}
          errMessage={errorMessage.errMessage}
          isBlockInput={isBlockInput}
          setIsBlockInput={setIsBlockInput}
          />
          </AuthRoute>}
        />
        <Route
          path='/signin'
          element={<AuthRoute isLoggedIn={stateIsLogin.isLoggedIn}>
          <Login 
          onLogin={handleLogin}
          errMessage={errorMessage.errMessage}
          isBlockInput={isBlockInput}
          setIsBlockInput={setIsBlockInput}
          />
          </AuthRoute>}
        />
        <Route
          path="/profile"
          element={<ProtectedRouteElement isLoggedIn={stateIsLogin.isLoggedIn}>
          <Profile 
            handleUpdateProfile={handleUpdateProfile}
            errMessage={errorMessage.errMessage}
            textMessage={saveMessage.textMessage}
            signOut={signOut}
            isBlockInput={isBlockInput}
            setIsBlockInput={setIsBlockInput}
          />
          </ProtectedRouteElement>}
          
        />
        <Route
        path="*"
        element={<NotFound />}
        />
      </Routes>
      
      {footer && <Footer />}
      
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
