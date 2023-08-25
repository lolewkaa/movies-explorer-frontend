import React from "react";

export default function FilterCheckbox() {
  return (
    <section className="checkbox">
      <label className="checkbox__button" for="checkbox">
	    <input className="checkbox__input" type="checkbox" id="checkbox" />
	    <span className="checkbox__switch">Короткометражки</span>
      </label>
    </section>
  )
}