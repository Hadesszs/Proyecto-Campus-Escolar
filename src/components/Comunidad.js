import React from "react";
import { Link } from "react-router-dom";
import './comunidad.css'

export default function Comunidad() {
  return <main>
        <header className="container-header">
      <div>
        <Link to="/">
            <div className="titulo">
          <h1>E.E.S.T N°1</h1>
          </div>
          </Link>
      </div>
      <div className="iconos">
        <ul className="lista1">
          <li><Link to="/login"> Iniciar Sesión</Link></li>
        </ul>
      </div>
    </header>
  </main>
}
