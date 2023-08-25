import React from "react";
import formIcon from '../../images/icon__COLOR_invisible.svg'

export default function SearchForm() {
  return (
    <section className="searchForm">
      <form className="form">
        <input
          className='form__input'
          name='search'
          minLength='2'
          maxLength='40'
          type='text'
          placeholder='Фильм'
        />
        <button className='form__button' type='button'>
          <img className="form__icon" src={formIcon} alt="иконка 'Поиск'" />
        </button>
      </form>
    </section>
  )
}