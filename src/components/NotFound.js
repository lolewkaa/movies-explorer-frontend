import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {

  return (
    <div className="notFound">
    <h2 className="notFound__title">404</h2>
    <h2 className="notFound__text">Страница не найдена</h2>
    <Link className="notFound__link">Назад</Link>
    </div>
  )
}