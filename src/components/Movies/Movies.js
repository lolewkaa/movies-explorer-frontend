import React from "react";
import SearchForm from "./SearchForm";
import FilterCheckbox from "./FilterCheckbox";
import Preloader from "./Preloader";
import MoviesCardList from "./MoviesCardList";
import Header from "../Header";

export default function Movies() {

    return (
      <section className="movies">
        <Header />
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
        <div className="movies__box-button-more">
          <button className="movies__button-more">Ещё</button>
        </div>
      </section>
    )
}