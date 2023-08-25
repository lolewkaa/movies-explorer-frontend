import React from "react";

export default function Techs() {
  return (
    <section className="techs" id='techs'>
      <h2 className="project__title">Технологии</h2>
      <div className="techs__container">
        <h2 className="techs__text">7 технологий</h2>
        <h2 className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h2>
        <div className="techs__box">
          <h2 className="techs__element">HTML</h2>
          <h2 className="techs__element">CSS</h2>
          <h2 className="techs__element">JS</h2>
          <h2 className="techs__element">React</h2>
          <h2 className="techs__element">Git</h2>
          <h2 className="techs__element">Exspress.js</h2>
          <h2 className="techs__element">mongoDB</h2>
        </div>
      </div>
    </section>
  )
}