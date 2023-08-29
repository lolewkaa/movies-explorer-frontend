import React from "react";
import studentPic from '../../images/pic__COLOR_pic.png'
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="student" id='aboutMe'>
      <h2 className="project__title">Студент</h2>
      <div className="student__container">
        <div className="student__box">
          <h2 className="student__title">Виталий</h2>
          <h2 className="student__description">Фронтенд-разработчик, 30 лет</h2>
          <h2 className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</h2>
          <Link className="student__desc" target="_blank" to={'https://github.com/lolewkaa'}>Github</Link>
        </div>
        <img className="student__pic" src={studentPic} alt='Фотография студента'/>
      </div>
    </section>
  )
}