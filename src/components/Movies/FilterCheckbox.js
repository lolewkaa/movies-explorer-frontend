import React from "react";

export default function FilterCheckbox(props) {
  const {onShortMovies, short} = props
   
  return (
    <section className="checkbox">
      <label className="checkbox__button" htmlFor="checkbox">
	    <input name="shorts"
                 checked={ short } onChange={() => {onShortMovies(!short)}} className="checkbox__input" type="checkbox" id="checkbox" />
	    <span className="checkbox__switch">Короткометражки</span>
      </label>
    </section>
  )
}