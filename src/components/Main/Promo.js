import React from "react";

import promoLogo from '../../images/pic__COLOR_landing-logo.png'

export default function Promo() {
  return(
    <section className="promo">
      <div className="promo__container">
        <img className="promo__logo" src={promoLogo} alt="Логотип 'О проекте'" />
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
    </section>
  )
}