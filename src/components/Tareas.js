import React from "react";
import { Link } from "react-router-dom";
import "./tareas.css";

export default function Tareas() {
  return (
    <body>
      <header className="container-header">
        <div>
          <a href="#">
            <h1>E.E.S.T N°1</h1>
          </a>
        </div>
        <div className="iconos">
          <ul>
            <li>
              <a href="#">
                <i class="fa-solid fa-house" title="Comunidad"></i>
              </a>
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

      <h1 className="materias">Materias Curriculares</h1>

      <div className="container-body1">
        <div className="grid-container1">
          <article id="3685" className="location-listing">
            <a className="location-title" href="#">
              Matematicas
            </a>

            <div className="location-image">
              <a href="#">
                <img
                  src="https://educacion30.b-cdn.net/wp-content/uploads/2020/03/fondo-matematicas_23-2148146270.jpg"
                  alt="Novelas"
                />
              </a>
            </div>
          </article>
          <article id="3685" className="location-listing">
            <a className="location-title" href="#">
              Ingles
            </a>

            <div className="location-image">
              <a href="#">
                <img
                  src="https://educacion30.b-cdn.net/wp-content/uploads/2021/11/english-british-england-language-education-concept-1-min-978x652.jpg"
                  alt="Novelas"
                />
              </a>
            </div>
          </article>
          <article id="3685" className="location-listing">
            <a className="location-title" href="#">
              Plastica
            </a>

            <div className="location-image">
              <a href="#">
                <img
                  src="https://1.bp.blogspot.com/--J7T2TxQowY/XnNuh6uAj1I/AAAAAAAAAYU/FboYXXkYXZMpEFUC0CihtvhcTZ2RsXr8QCLcBGAsYHQ/s1600/artes_plasticas.jpg"
                  alt="Novelas"
                />
              </a>
            </div>
          </article>
          <article id="3685" className="location-listing">
            <a className="location-title" href="#">
              Ciencias Sociales
            </a>

            <div className="location-image">
              <a href="#">
                <img
                  src="https://cdn.techtitute.com/techtitute-blog/2021/01/ciencias-sociales-1.jpg"
                  alt="Novelas"
                />
              </a>
            </div>
          </article>
          <article id="3685" className="location-listing">
            <a className="location-title" href="#">
              Ciencias Naturales
            </a>

            <div className="location-image">
              <a href="#">
                <img
                  src="https://4.bp.blogspot.com/-Tm0rA8-w1l0/V5YWqE5JmiI/AAAAAAAAAAg/vkvigAEJdEUQ19JSNQTvHlQEthi-PbPqwCLcB/s1600/2014-10-01%2B17.50.12.jpg"
                  alt="Novelas"
                />
              </a>
            </div>
          </article>
          <article id="3685" className="location-listing">
            <a className="location-title" href="#">
              Practicas del Lenguaje
            </a>

            <div className="location-image">
              <a href="#">
                <img
                  src="http://2.bp.blogspot.com/-hyCVhAVubo0/U2O7dmf4_BI/AAAAAAAAAnM/maLHj_pw8aI/s1600/Dibujo.jpg"
                  alt="Novelas"
                />
              </a>
            </div>
          </article>
          
        </div>
      </div>
      <div className="footer"></div>
    </body>
  );
}
