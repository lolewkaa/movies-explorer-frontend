import React from "react";
import formIcon from '../../images/icon__COLOR_invisible.svg'
import { useState, useEffect } from 'react';
import FilterCheckbox from "./FilterCheckbox";

export default function SearchForm(props) {
  
  const { searchAllMovies, stateValues, searchShortMovies } = props;

  const [values, setValues] = useState(stateValues);

  function handleInputSearch(e) {
    setValues({
      ...values,
      search: e.target.value,
    })
  }

  function findMoviesByName() {
    searchAllMovies(values)
    .catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleSubmit(e) {
    e.preventDefault();
    findMoviesByName()
  }

  return (
    <section className="searchForm">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <input
          className='form__input'
          name='search'
          type='text'
          placeholder='Фильм'
          value={values.search}
          onChange={handleInputSearch}
          required
        />
        <button className='form__button' type="submit">
          <img className="form__icon" src={formIcon} alt="иконка 'Поиск'" />
        </button>
      </form>
      <FilterCheckbox setValues={setValues} values={values} searchShortMovies={searchShortMovies} />
    </section>
  )
}