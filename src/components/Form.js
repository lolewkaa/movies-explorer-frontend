import React from "react";
import logo from '../images/logo.svg'


export default function Form({ title }) {

  return (
    <div className="form-welcome">
      <img src={logo} alt='Логотип' className="form-welcome__logo"/>
      <h2 className="form-welcome__title">{title}</h2>
    </div>
  )
}