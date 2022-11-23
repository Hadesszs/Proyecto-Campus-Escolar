import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Biblioteca from "./components/Biblioteca";
import Tareas from "./components/Tareas";
import Comunidad from "./components/Comunidad";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Comunidad />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
