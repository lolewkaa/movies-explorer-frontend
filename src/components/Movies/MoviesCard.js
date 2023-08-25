import React from "react";
import buttonPic from '../../images/d8.svg'
import { useState } from "react";
import { useLocation } from 'react-router-dom';



export default function MoviesCard({movie}) {

    const [isLiked, setIsLiked] = useState(false);

    const handleClickLike = () => {
      setIsLiked(isLiked => !isLiked);
    }
  
    const likeMovieButton = (
      `movies__button ${isLiked && 'movies__button_like'}`
    );
    const location = useLocation();

    return (
      <li className="movies__list">
        <img 
        className="movies__image"
        src={movie.image}
        alt={movie.name}
        />
        <div className="movies__box">
          <div className="movies__button-box">
            <h2 className='movies__name'>{movie.name}</h2>
            {location.pathname === '/saved-movies' ? (
              <button
              className="movies__button_save"
              type="button"
              >
                <img className="movies__button-pic" src={buttonPic} alt="кнопка 'Удалить'"/>
              </button> 
            ) : (
            <button 
            className={likeMovieButton}
            onClick={handleClickLike} 
            type='button'
            >
            </button>
            )}
          </div>
        <p className='movies__time'>{movie.time}</p>
        </div>
      </li>
    )
}