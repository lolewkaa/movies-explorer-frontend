import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
    // сохраняем местоположение в переменную
  const location = useLocation();
    return (
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__container">
            <h2 className="footer__text">&copy; 2023</h2>
            <div className="footer__box">
              <Link className="footer__text" target="_blank" to={'https://practicum.yandex.ru/'}>Яндекс.Практикум</Link>
              <Link className="footer__text" target="_blank" to={'https://github.com/lolewkaa'}>Github</Link>
            </div>
        </div>
      </footer>
    )
}