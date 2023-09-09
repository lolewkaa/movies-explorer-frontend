import React from "react";
import Form from "./Form";
import { Link, useLocation } from "react-router-dom";
import { useValidation } from "../hooks/FormValidation";
import { useState, useEffect } from 'react';

export default function Login({isBlockInput, onLogin, errMessage}) {
  const {  values,  errors, isValid, handleChange, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit (e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password
    })
  };

  return (
    <form className="register" onSubmit={handleSubmit} noValidate>
      <div>
        <Form 
        title='Рады видеть!'
        />
        <h2 className="register__text">E-mail</h2>
        <input 
          className={`register__input ${errors.email && 'register__input_type_error'}`}
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          // value={formValue.email || ''}
          pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
          value={values.email || ''}
          required 
          readOnly={isBlockInput && true}
          />
        <span className={`profile__span ${errors.email && 'profile__item-error'}`}>Что-то пошло не так...</span>
        <h2 className="register__text" >Пароль</h2>
        <input className={`register__input ${errors.password && 'register__input_type_error'}`}
          id="password"
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
          // value={formValue.password || ''}
          minLength="8"
          maxLength="40"
          value={values.password || ''}
          required 
          readOnly={isBlockInput && true}
          />
        {/* <span className={`register__span ${errors.password && 'register__item-error'}`} >Что-то пошло не так...</span> */}
        <span className={`profile__span ${errors.password  && 'profile__item-error'}`}>Что-то пошло не так...</span>
      </div>
      <div className="form-button">
      <span className="form-button__error-message" >{errMessage}</span>
        <button 
        className={isValid ? 'form-button__button' : 'form-button__button form-button__button_disable'} 
        disabled={!isValid || isBlockInput ? true : false}  
        
        type='submit'
        >Войти</button>
        <div className="form-button__container">
          <h2 className="form-button__text">Ещё не зарегистрированы?</h2>
          <Link className='form-button__link' to='/signup'>Регистрация</Link>
        </div>
      </div>
    </form>
  )
}