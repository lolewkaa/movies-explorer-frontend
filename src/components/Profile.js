import React from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import { useValidation } from "../hooks/FormValidation";
import { useState, useEffect, useContext } from 'react';

export default function Profile({ isBlockInput, signOut, handleUpdateProfile, errMessage, textMessage}) {

  const { isValid, values,  errors, handleChange, setValues, resetForm } = useValidation();

  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm();
  }, [resetForm]);
  
  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      const { name, email } = values;
      // Передаём значения управляемых компонентов во внешний обработчик
      handleUpdateProfile({ name, email });
    } 
   
    const [isInputActive, setIsInputActive] = React.useState(false);

    function handleInputState () {
      setIsInputActive(true)
    }

    const buttonIsValid =
  isValid &&
  (values.name !== currentUser.name || values.email !== currentUser.email);

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__box">
            <h2 className="profile__text">Имя</h2>
            <input className="profile__input" 
             id="name-input" 
             type="text" 
             minLength="2" 
             maxLength="40" 
             name="name" 
             required 
             placeholder={currentUser.name} 
             value={values.name ? values.name : ''}
             onChange={handleChange}
             disabled={!isInputActive}
             readOnly={isBlockInput && true}
            />
          </div>
          <span className={`profile__span ${errors.name  && 'profile__item-error'}`}>Что-то пошло не так...</span>
          <div className="profile__box">
            <h2 className="profile__text">E-mail</h2>
            <input className="profile__input" 
            id="email-input" 
            type="text"  
            minLength="2" 
            maxLength="200" 
            name="email" 
            required 
            placeholder={currentUser.email} 
            value={values.email ? values.email : ''}
            onChange={handleChange}
            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
            disabled={!isInputActive}
            readOnly={isBlockInput && true}
            />
          </div>
          <span className={`profile__span ${errors.email  && 'profile__item-error'}`}>Что-то пошло не так...</span>
          <div className="profile__box-button">
          <span className="form-button__error-message" >{errMessage}</span>
          <span className="form-button__message">{textMessage}</span>
          {isInputActive ? (
            <button
            className={buttonIsValid ? 'profile__button-save' : 'form-button__button form-button__button_disable'} 
            disabled={!buttonIsValid || isBlockInput ? true : false}
            >
              Сохранить
            </button>
            ) : (
            <><button
                className="profile__button"
                onClick={handleInputState}
              >
                Редактировать
              </button><Link to='/' className="profile__link" onClick={signOut}>
                  Выйти из аккаунта
                </Link></>
            )}
            </div>
      </div>
    </form>
  )
}