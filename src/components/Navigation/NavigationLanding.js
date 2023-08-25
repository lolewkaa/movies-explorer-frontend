import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLanding() {
  return (
    <div className="header__box">
    <><Link className="header__registration" to='/signup'>
          Регистрация
      </Link>
      <Link className="header__signin-button" to='/signin'>Войти</Link></>
      </div>
  )
}