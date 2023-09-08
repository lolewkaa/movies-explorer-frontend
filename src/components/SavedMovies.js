import React from "react";
import SearchForm from "./Movies/SearchForm";
import MoviesCardList from "./Movies/MoviesCardList";
import Header from "./Header";
import { useState, useEffect, useContext } from 'react';
import {findMoviesName, findMoviesTime} from '../utils/constants'

export default function SavedMovies(props) {

const { saveMovies, handleCardDelete} = props

const [values, setValues] = useState({
    search: '',
    shorts: false,
  });
  const [movies, setMovies] = useState(saveMovies);

  function updateMovies(values) {
    const allMovies = findMoviesName(saveMovies, values.search);
    const filteredMovies = values.shorts
      ? findMoviesTime(allMovies)
      : allMovies;

    setMovies(filteredMovies);
  }

  // Поиск сохраненных фильмов
  function searchAllMovies(values) {
    updateMovies(values);
    setValues(values);
    return Promise.resolve();
  }

  function searchShortMovies(_values) {
    const newValues = {
      ...values,
      shorts: _values.shorts,
    };

    updateMovies(newValues);
    setValues(newValues);
  }

  useEffect(() => {
    updateMovies(values);
  }, [saveMovies]);


    return (
        <>
        <SearchForm searchShortMovies={searchShortMovies}  searchAllMovies={searchAllMovies} stateValues={values} />
        {!movies ? null : (
        <MoviesCardList 
        movies={movies}
        handleCardDelete={handleCardDelete}
        
        />
        )}
       
        </>
    )
}