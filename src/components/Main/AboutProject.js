import React from "react";

export default function AboutProject() {
  return(
    <section className="project" id='aboutProject'>
      <h1 className="project__title">О проекте</h1>
      <div className="project__text-container">
      <div className="project__container">
          <h2 className="project__text">Дипломный проект включал 5 этапов</h2>
          <h2 className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h2>
        </div>
        <div className="project__container">
        <h2 className="project__text">На выполнение диплома ушло 5 недель</h2>
          <h2 className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h2>
        </div>
        </div>
      <div className="project__box">
        <h2 className="project__text-one-week">1 неделя</h2>
        <h2 className="project__text-four-week">4 недели</h2>
      </div>
      <div className="project__box">
        <h2 className="project__text-back-end">Back-end</h2>
        <h2 className="project__text-front-end">Front-end</h2>
      </div>
    </section>
  )
}