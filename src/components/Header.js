import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

export default function Header() {
    // сохраняем местоположение в переменную
  const location = useLocation();
    return (
        <header className={location.pathname === '/' ? 'header' : 'header__white'}>
         <Navigation />
        </header>
      );
}
