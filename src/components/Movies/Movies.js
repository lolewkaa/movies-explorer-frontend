import React from "react";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import MoviesCardList from "./MoviesCardList";
import Header from "../Header";
import { useState, useEffect } from 'react';

export default function Movies(props) {

  const {movies, saveMovies, handleLikeMovie, findAllMovies, shortMovies, isLoading } = props

  const [values, setValues] = useState(JSON.parse(localStorage.getItem('findMovies')) || {
    search: '',
    shorts: false,
  });

  useEffect(() => {
    localStorage.setItem('findMovies', JSON.stringify(values))
  }, [values]);

  function searchShortMovies(data) {
    const newValues = {
      ...data,
      shorts: data.shorts,
    };

    shortMovies(newValues);
    setValues(newValues);
  }

  function searchAllMovies(data) {
    return findAllMovies(data)
      .then(() => {
        setValues(data);
      });
  }

    return (
      <section className="movies">
        <SearchForm searchShortMovies={searchShortMovies}  searchAllMovies={searchAllMovies} stateValues={values}/>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={movies} saveMovies={saveMovies} handleLikeMovie={handleLikeMovie}/>
        )}
      </section>
    )
}