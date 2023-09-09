import React from "react";
import buttonPic from '../../images/d8.svg'
import { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { moviesApi } from '../../utils/MoviesApi'


export default function MoviesCard(props) {

  const {  movie, saveMovies, handleLikeMovie, handleCardDelete} = props

  const isLiked = saveMovies
    ? saveMovies.some((item) => item.movieId === movie.id)
    : false;

    const handleSaveMovie = () => {
      handleLikeMovie(movie)
    }

    const handleMovieDelete = () => {
      handleCardDelete(movie)
    }

    // const [isLiked, setIsLiked] = useState(false);

    // const handleClickLike = () => {
    //   setIsLiked(isLiked => !isLiked);
    // }
  
    // const likeMovieButton = (
    //   `movies__button ${isLiked && 'movies__button_like'}`
    // );

    
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
            {location.pathname === '/saved-movies' ? (
              <button
              className="movies__button_save"
              type="button"
              onClick={handleMovieDelete}
              >
                <img className="movies__button-pic" src={buttonPic} alt="кнопка 'Удалить'"/>
              </button> 
            ) : (
            <button 
            className={ isLiked
              ? 'movies__button_like'
              : 'movies__button'}
            onClick={handleSaveMovie} 
            type='button'
            >
            </button>
            )}
          </div>
        <p className='movies__time'>{movie.duration}</p>
        </div>
      </li>
    )
}