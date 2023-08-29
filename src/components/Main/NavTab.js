import React from "react";

import { Link } from 'react-scroll';

export default function NavTab() {
    
  return(
    <div className="nav">
      <Link className="nav__link" to='aboutProject'>О проекте</Link>
      <Link className="nav__link" to='techs'>Технологии</Link>
      <Link className="nav__link" to='aboutMe'>Студент</Link>
    </div>
  )
}