import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Portfolio() {
    // сохраняем местоположение в переменную
    const location = useLocation();
    
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__container">
            <div className="portfolio__box">
          <Link className="potfolio__link" target="_blank" to={'https://github.com/lolewkaa/how-to-learn'}>
            Статичный сайт
          </Link>
          <p className="portfolio__pic">↗</p>
            </div>
            <div className="portfolio__box">
          <Link className="potfolio__link" target="_blank" to={'https://github.com/lolewkaa/russian-travel'}>
          Адаптивный сайт
          </Link>
          <p className="portfolio__pic">↗</p>
            </div>
            <div className="portfolio__box">
          <Link className="potfolio__link" target="_blank" to={'https://github.com/lolewkaa/react-mesto-api-full-gha'}>
          Одностраничное приложение
          </Link>
          <p className="portfolio__pic">↗</p>
            </div>
        </div>
      </section>
    )
}