import React from "react";
import { Link } from "react-router-dom";
import "./biblioteca.css";

export default function Biblioteca() {
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
                <i className="fa-solid fa-envelope" title="Notificaciones"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-user" title="Perfil"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-circle-question" title="Ayuda"></i>
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
      <div className="grid-container">
        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Programación
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://lh3.googleusercontent.com/XSDv6XYZ973bdxMBDJ1adLHpSSUv4vsZJaePpms21eZDl-27JIfTHIYXnnudwPfAg_1-59bKAarMhWGNagsTR2Gq0pAWBUw6CwYwH2V0TzDXZT9z1fKvr1vCOrk8nxZ-U7wVfOJq"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Quimica
          </a>

          <div className="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src="https://buscatuprofesor.es/data/uploads/Procesos%20qu%C3%ADmicos.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Electromecanica
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.carreras.unse.edu.ar/wp-content/uploads/2020/09/bfe401e406390e9f6b82c7a6f1fbc5c7.png"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Ciclo Basico
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://images.ecestaticos.com/7TzslcOZwsEYcKIfX62vvFhiQ2c=/0x110:2119x1301/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffd0%2F16b%2Fb30%2Ffd016bb3084c0afd5024196507df9b78.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Taller
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.autoavance.co/wp-content/uploads/2012/05/herramientas-de-taller-autoavance-770x480.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Novelas
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://mesfix.com/blog/wp-content/uploads/2019/04/LIBROS-DE-EMPRENDIMIENTO.png"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Mangas
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://jw-webmagazine.com/wp-content/uploads/2020/05/Best-Manga-of-All-Time.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Historieta
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.ejemplos.co/wp-content/uploads/2021/09/comics-2-e1634680280116.png"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Comic
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.akiracomics.com/imagenes/poridentidad?identidad=8c292853-11f4-408e-a869-0bda5f2b382d&ancho=850&alto="
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Periodico
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://static2.elcorreo.com/www/multimedia/201907/22/media/cortadas/noticias-frikis-kpYC-U80789336489c5E-624x385@El%20Correo.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Biografia
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.mentesliberadas.com/wp-content/uploads/2019/08/biografias-personalidades-1024x571.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Autobiografia
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.caracteristicass.de/wp-content/uploads/2018/08/caracteristicas-de-las-autobiografias.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            De Consulta
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="http://1.bp.blogspot.com/-stsbsZEXtDY/UGC5TPRqbBI/AAAAAAAAAEE/XblutibTKWI/s1600/libros+consulta.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            De Viajes
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://www.exoticca.com/es/blog/wp-content/uploads/2019/04/Los-libros-de-viajes-que-m%C3%A1s-te-inspirar%C3%A1n-y-te-llevar%C3%A1n-a-la-aventura.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>

        <article id="3685" className="location-listing">
          <a className="location-title" href="#">
            Tecnicos
          </a>

          <div className="location-image">
            <a href="#">
              <img
                src="https://josemanuelvega.files.wordpress.com/2013/01/tsv-en-mesa-destacados.jpg"
                alt="Novelas"
              />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
