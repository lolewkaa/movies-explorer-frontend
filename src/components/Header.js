import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

export default function Header( props) {
  const { isLoggedIn } = props;
    // сохраняем местоположение в переменную
  const location = useLocation();
    return (
        <header className={location.pathname === '/' ? 'header' : 'header__white'}>
          <div className="header__wrapper">
         <Navigation isLoggedIn={isLoggedIn} />
         </div>
        </header>
      );
}
