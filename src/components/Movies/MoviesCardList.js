import React from "react";
import MoviesCard from "./MoviesCard";
import { useState, useEffect } from "react";
// import { cards } from "../../utils/constants";
import {SCREEN_320,
  SCREEN_768 ,
  CARDS_SCREEN_1280, 
  CARDS_SCREEN_768, 
  CARDS_SCREEN_320, 
  MORE_1280, 
  MORE_768, } from '../../utils/constants'

export default function MoviesCardList(props) {

  const {isLiked,
  setliked, 
  setFilteredMoviesSave,
   movies, 
   setSaveMovies, 
   saveMovies, 
   handleLikeMovie } = props
  
  const [visibleMovies, setVisibleMovies] = useState([]); 
  const [hiddenMovies, setHiddenMovies] = useState([]) 

  const [cards, setCards] = useState(CARDS_SCREEN_1280);
  const [moreCards, setMoreCards] = useState(MORE_1280);

  useEffect(() => {
    changingSize()
    window.addEventListener("resize", changingSize)
    return () => {
      window.removeEventListener("resize", changingSize)
    }
  }, []);

  function changingSize() {
      const size = window.innerWidth;
      if(size > SCREEN_768){
        setCards(CARDS_SCREEN_1280)
        setMoreCards(MORE_1280)
      } else if(size > SCREEN_320) {
        setCards(CARDS_SCREEN_768)
        setMoreCards(MORE_768)
      } else {
        setCards(CARDS_SCREEN_320)
        setMoreCards(MORE_768)
      }
  }

  useEffect(() => {
    setVisibleMovies(movies.slice(0, cards))
    setHiddenMovies(movies.slice(cards))
  }, [movies, cards]);

  function handleMoreButton(){
    const moviesArray = [
      ...visibleMovies,
      ...hiddenMovies.slice(0,moreCards)
    ];
    setVisibleMovies(moviesArray)
    setHiddenMovies(hiddenMovies.slice(moreCards))

  }

 
  return (
   <section className="movies__container">
    {visibleMovies.length === 0 ? (
          <p>Ничего не найдено</p>
        ) : (
    <ul className="movies__cardlist">
    
      {visibleMovies.map((movie) => (
        <MoviesCard 
        movie={movie}
        key={movie.id ?? movie.movieId}
        saveMovies={saveMovies}
        handleLikeMovie={handleLikeMovie}
        setSaveMovies={setSaveMovies}
        setFilteredMoviesSave={setFilteredMoviesSave}
        isSavedMovies={ props.isSavedMovies }
        isLiked={isLiked}
        setliked={setliked}
        />
       ))}
       
     </ul>
        )}
      <div className="movies__box-button-more">
      {visibleMovies.length > 0 && hiddenMovies.length > 0  && (
          <button type="button" onClick={handleMoreButton} className="movies__button-more">Ещё</button>)}
        </div>
   </section>
  )
}