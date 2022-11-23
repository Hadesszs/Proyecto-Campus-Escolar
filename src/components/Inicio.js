import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <main>
      <header className="container-header">
        <Link to="/inicio">
          <div className="titulo">
              <h1>E.E.S.T N°1</h1>
          </div>
        </Link>
        <div className="iconos">
          <ul className="lista1">
            <li>
                <Link to="/">
                  <i class="fa-solid fa-house" title="Comunidad"></i>
                </Link>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-envelope" title="Notificaciones"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-user" title="Perfil"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-circle-question" title="Ayuda"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="container-nav">
        <ul>
          <li>
            <Link to="/inicio">
              <button className="button">Inicio</button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <button className="button">Asistencias</button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <button className="button">Notas</button>
            </Link>
          </li>
          <li>
            <Link to="/tareas">
              <button className="button">Tareas</button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <button className="button">Horario</button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <button className="button">Calendario</button>
            </Link>
          </li>
          <li>
            <Link to="/biblioteca">
              <button className="button">Biblioteca</button>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Inicio;
