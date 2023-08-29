import React from "react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu({ isOpenMenu }) {
    
    return (
        
        <div className={`burgerMenu ${isOpenMenu ? 'burgerMenu_active' : ''}`}>
            {/* <div className={`burgerMenu__overlay ${isOpenMenu ? 'burgerMenu__overlay_active' : ''}`}></div> */}
            <div className="burgerMenu__box">
            <div className="burgerMenu__container">
                <div className="burgermenu__text-box">
            <NavLink className="burgerMenu__save-film-link" to="/">
              Главная
          </NavLink>
           <NavLink className="burgerMenu__film-link" to="/movies">
              Фильмы
          </NavLink>
          <NavLink className="burgerMenu__save-film-link" to='/saved-movies'>
              Сохранённые фильмы
          </NavLink>
          </div>
      <button
          className="burgerMenu__button"
          type="reset"
      >Аккаунт
      </button>
      
      </div>
      </div>
      </div>
        
    )
}