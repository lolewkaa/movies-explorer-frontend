import React from "react";
import FilterCheckbox from "./Movies/FilterCheckbox";
import SearchForm from "./Movies/SearchForm";
import MoviesCardList from "./Movies/MoviesCardList";
import Header from "./Header";

export default function SavedMovies() {

    return (
        <>
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
        <div className="movies__box-button-more">
          <button className="movies__button-more">Ещё</button>
        </div>
        </>
    )
}