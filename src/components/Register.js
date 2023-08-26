import React from "react";
import Form from "./Form";
import { Link, useLocation } from "react-router-dom";

export default function Register() {

  return (
    <section className="register">
        <form>
      <Form 
      title='Добро пожаловать!'
      />
      <h2 className="register__text">Имя</h2>
      <input className="register__input" id='name' type='text' placeholder='Введите имя' required />
      <span className="register__item-error">Что-то пошло не так...</span>
      <h2 className="register__text">E-mail</h2>
      <input className="register__input" id='email' type='text' placeholder='Укажите почту' required />
      <span className="register__item-error">Что-то пошло не так...</span>
      <h2 className="register__text" >Пароль</h2>
      <input className="register__input register__input-error" id='password' type='password' placeholder='Введите пароль' required />
      <span className="register__item-error">Что-то пошло не так...</span>
        </form>
        
      <div className="form-button">
        <button className="form-button__button">Зарегистрироваться</button>
        <div className="form-button__container">
          <h2 className="form-button__text">Уже зарегистрированы?</h2>
          <Link className='form-button__link' to='/signin'>Войти</Link>
        </div>
      </div>
        
    </section>
  )
}