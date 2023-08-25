import React from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";

export default function Profile() {

    const location = useLocation();

  return (
    <section className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
          <div className="profile__box">
            <h2 className="profile__text">Имя</h2>
            <input className="profile__input"/>
          </div>
          <div className="profile__box">
            <h2 className="profile__text">E-mail</h2>
            <input className="profile__input"/>
          </div>
          <div className="profile__box-button">
            <button className="profile__button">
              Редактировать
            </button>
            <Link to='/signin' className="profile__link">
              Выйти из аккаунта
            </Link>
            </div>
      </div>
    </section>
  )
}