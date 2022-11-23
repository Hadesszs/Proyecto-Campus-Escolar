import React from "react";
import { Link } from "react-router-dom";
import "./tareas.css";

export default function Tareas() {
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
      <div className="materias">
        <h1>Materias Curriculares</h1>
      </div>
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
                src="http://formacionib.org/noticias/IMG/arton6548.jpg?1664187970"
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
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Ed. Fisica
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.abc.com.py/resizer/daYvtTmVlCZyZPGAbJuDm2QrBNo=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/DBEEUX7F7VGTTMFNLX5X46CP2Y.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Ciudadania
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.colegiosanjosemartinez.edu.ar/wp-content/uploads/2022/06/BANNER-15-458x254.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>
      </div>
      <div className="talleres">
        <h1>Taller</h1>
      </div>
      <div className="grid-container2">
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Procesos Tecnologicos
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.lanuevaradiosuarez.com.ar/adjuntos/800/87_64fa_005Z7_1560558310.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Lenguaje Tecnologico
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Drafting_board_with_T_Square.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Sistemas Tecnologicos
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="http://www.lucascorp.eu/images/procesos-tecnologicos.png"
                alt="Novelas"
              />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
