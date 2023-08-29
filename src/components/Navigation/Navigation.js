import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../../images/logo.svg"
import NavigationLanding from "./NavigationLanding";
import NavigationProfile from "./NavigationProfile";


export default function Navigation() {
  // сохраняем местоположение в переменную
  const location = useLocation();
  
  return (
    <nav className='header__landing-box'>
      <Link to='/'>
        <img className="header__logo" src={headerLogo} alt="Логотип" to='/'/>
      </Link>
      {location.pathname === '/' ? <NavigationLanding /> : <NavigationProfile />}
    </nav>
  )
}
