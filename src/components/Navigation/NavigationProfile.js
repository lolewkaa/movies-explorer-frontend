import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu";
import closeIconMenu from '../../images/Group.svg'
import iconMenu from '../../images/icon__COLOR_icon-main.svg'

export default function NavigationProfile() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    function toggleBurgerMenu() {
        setIsOpenMenu(true);
      }
      function closeMenu() {
        setIsOpenMenu(false)
      }
  return (
    <>
    {!isOpenMenu ? (
      <button className="header__button-menu" onClick={toggleBurgerMenu} >
        <img className='header__menu-pic'  src={iconMenu} alt='кнопка "Меню"'/>
        </button>
    ): (
      <button className="header__menu-close"  onClick={closeMenu}> 
        <img className='header__close-pic'  src={closeIconMenu} alt='кнопка "Закрыть"'/>
      </button>
    )} 
    <BurgerMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/> 
    <div className="header__container">
          <NavLink className="header__film-link" to="/movies">
              Фильмы
          </NavLink>
          <NavLink className="header__save-film-link" to='/saved-movies'>
              Сохранённые фильмы
          </NavLink>
      </div>
      <NavLink
          className="header__button"
          type="reset"
          to='/profile'
      >Аккаунт
      </NavLink>
      
      </> 
  )
}