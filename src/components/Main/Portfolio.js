import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Portfolio() {
    // сохраняем местоположение в переменную
    const location = useLocation();
    
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__container">
            
          <Link className="potfolio__link" target="_blank" to={'https://github.com/lolewkaa/how-to-learn'}>
            Статичный сайт
            <p className="portfolio__pic">↗</p>
          </Link>
          <Link className="potfolio__link" target="_blank" to={'https://github.com/lolewkaa/russian-travel'}>
          Адаптивный сайт
          <p className="portfolio__pic">↗</p>
          </Link>
          <Link className="potfolio__link" target="_blank" to={'https://github.com/lolewkaa/react-mesto-api-full-gha'}>
          Одностраничное приложение
          <p className="portfolio__pic">↗</p>
          </Link>
        </div>
      </section>
    )
}