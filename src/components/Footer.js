import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
    // сохраняем местоположение в переменную
  const location = useLocation();
    return (
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__container">
            <h2 className="footer__text">&copy; 2023</h2>
            <div className="footer__box">
              <h2 className="footer__text">Яндекс.Практикум</h2>
              <h2 className="footer__text">Github</h2>
            </div>
        </div>
      </footer>
    )
}