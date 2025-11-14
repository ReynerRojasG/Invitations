'use client';
import React, { useState } from 'react';
import "../styles/NavBar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      {/* Contenedor principal del navbar */}
      <nav className="navbar">
        {/* Botón hamburguesa (solo visible en móviles) */}
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Links normales */}
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#conoce">Conoce más</a></li>
          {/* Felicitar dentro del menú en móviles */}
          <li className="nav-special-mobile"><a href="#felicitar">Felicitar</a></li>
        </ul>
      </nav>

      {/* Botón separado Felicitar (solo desktop) */}
      <div className="nav-special-desktop">
        <a href="#felicitar">Felicitar</a>
      </div>
    </div>
  );
}
