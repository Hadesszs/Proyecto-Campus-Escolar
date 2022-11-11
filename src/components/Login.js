import React from "react";
import {Link} from 'react-router-dom';
import './login.css'


function Login() {
  return (
    <div className="body">
    <div className="login-card">
      <h2>E.E.S.T N°1</h2>
      <h3>Ingresa tus datos</h3>
      <form className="login-form">
        <input className="control" type="text" placeholder="Nombre de usuario" />
        <div className="password">
          <input className="control" id="password" type="password" placeholder="Contraseña" />
        </div>
        <Link className="link" to='/inicio'><button className="control1">Iniciar Sesión</button></Link>
      </form>
    </div>
    </div>
  );
}

export default Login;
