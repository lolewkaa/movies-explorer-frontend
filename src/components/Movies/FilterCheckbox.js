import React from "react";

export default function FilterCheckbox(props) {
  const {values, searchShortMovies, setValues} = props
   function handleInputShort(e) {
    const newValues = {
      ...values,
      shorts: e.target.checked,
    }
    setValues(newValues)
    searchShortMovies(newValues)
  }
  return (
    <section className="checkbox">
      <label className="checkbox__button" htmlFor="checkbox">
	    <input name="shorts"
                checked={values.shorts}
                onChange={handleInputShort} className="checkbox__input" type="checkbox" id="checkbox" />
	    <span className="checkbox__switch">Короткометражки</span>
      </label>
    </section>
  )
}