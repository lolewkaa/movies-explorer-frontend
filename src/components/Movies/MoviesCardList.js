import React from "react";
import MoviesCard from "./MoviesCard";
import { useState, useEffect } from "react";
// import { cards } from "../../utils/constants";

export default function MoviesCardList(props) {

  const { movies, saveMovies, handleLikeMovie, handleCardDelete } = props

  const screen_320 = 728;
  const screen_768 = 857;
  const cardsScreen_1280 = 16;
  const cardsScreen_768 = 8;
  const cardsScreen_320 = 5;
  const more_1280 = 4;
  const more_768 = 2;
  
  
  const [visibleMovies, setVisibleMovies] = useState([]); 
  const [hiddenMovies, setHiddenMovies] = useState([]) 

  const [cards, setCards] = useState(cardsScreen_1280);
  const [moreCards, setMoreCards] = useState(more_1280);

  useEffect(() => {
    changingSize()
    window.addEventListener("resize", changingSize)
    return () => {
      window.removeEventListener("resize", changingSize)
    }
  }, []);

  function changingSize() {
      const size = window.innerWidth;
      if(size > screen_768){
        setCards(cardsScreen_1280)
        setMoreCards(more_1280)
      } else if(size > screen_320) {
        setCards(cardsScreen_768)
        setMoreCards(more_768)
      } else {
        setCards(cardsScreen_320)
        setMoreCards(more_768)
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
        handleCardDelete={handleCardDelete}
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