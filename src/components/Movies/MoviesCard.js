import React from "react";
import buttonPic from '../../images/d8.svg'
import { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import { moviesApi } from '../../utils/MoviesApi'
import { mainApi } from "../../utils/MainApi";

export default function MoviesCard(props) {

  const { isLiked, 
  movie, 
  setSaveMovies, 
  setFilteredMoviesSave, 
 } = props

  const durationMovie = (durationValue) => {
    const minutes = durationValue % 60;
    const hours = Math.floor(durationValue / 60)
    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`
  }
  const [liked, setLiked] = useState(isLiked);
  function handleLikeMovie(movie) {
     
        if (!props.isSavedMovies && !liked) {
      mainApi
      .postNewMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((res) => {
        movie._id = res._id
          const moviesSaved = JSON.parse(localStorage.getItem('allMoviesSave') || '[]');
          const newSavedMovies = [res, ...moviesSaved];
          localStorage.setItem('allMoviesSave', JSON.stringify(newSavedMovies));
          setLiked(true);
        
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
    } else {
      mainApi
        .deleteMovie(movie._id)
        .then((res) => {
          const moviesSaved = JSON.parse(localStorage.getItem('allMoviesSave'));
          const newSavedMovies = moviesSaved.filter((c) => c._id !== movie._id);
          localStorage.setItem('allMoviesSave', JSON.stringify(newSavedMovies));
          if(props.isSavedMovies) {
            setSaveMovies(newSavedMovies);
            setFilteredMoviesSave(newSavedMovies);
          }
          else {setLiked(false);}
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    }
    }

  useEffect(() => {
    const moviesSave = JSON.parse(localStorage.getItem('allMoviesSave') || '[]');
    moviesSave.forEach((userMovie) => {
      if (userMovie.movieId === movie.id) {
        setLiked(true);
        movie._id = userMovie._id
      }
    })
  }, [setLiked])

    const handleSaveMovie = () => {
      handleLikeMovie(movie)
    }
     const location = useLocation();

    return (
      <li className="movies__list" >
        <Link target="_blank" to={movie.trailerLink}>
        <img 
        className="movies__image"
        src={movie.image.url ? moviesApi._baseUrl + movie.image.url : movie.image}
        alt={movie.nameRU}
        />
        </Link>
        <div className="movies__box">
          <div className="movies__button-box">
            <h2 className='movies__name'>{movie.nameRU}</h2>
            <button className={
            (`movies__button ${liked ? 'movies__button_like' : ''} 
            ${props.isSavedMovies ? 'movies__button_save' : ''}  `) }
            onClick={ handleSaveMovie }
            type='button'
            />
          </div>
        <p className='movies__time'>{durationMovie(movie.duration)}</p>
        </div>
      </li>
    )
}