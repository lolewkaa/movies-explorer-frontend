import React from "react";
import formIcon from '../../images/icon__COLOR_invisible.svg'
import { useState, useEffect } from 'react';
import FilterCheckbox from "./FilterCheckbox";


export default function SearchForm(props) {
  
  const { short, refreshShortMovie, refreshSearchQuery, onSubmit } = props;

  return (
    <section className="searchForm">
      <form className="form" onSubmit={ onSubmit } noValidate>
        <input
          className='form__input'
          name='search'
          type='text'
          placeholder='Фильм'
          value={ props.query }
            onChange={e => refreshSearchQuery(e.target.value)}
          required
        />
        <button className='form__button' type="submit">
          <img className="form__icon" src={formIcon} alt="иконка 'Поиск'" />
        </button>
      </form>
      <FilterCheckbox  onShortMovies={ refreshShortMovie }
          short={short}
           />
    </section>
  )
}