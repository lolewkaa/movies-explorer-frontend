import React from "react";
import MoviesCard from "./MoviesCard";
import { cards } from "../../utils/constants";

export default function MoviesCardList() {

  return (
   <section className="movies__container">
     <ul className="movies__cardlist">
       {cards.slice().map((movie, i) => (
        <MoviesCard 
        movie={movie}
        />
       ))}
     </ul>
   </section>
  )
}