'use client';
import React, { useState } from 'react';
import "../styles/NavBar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔥 Botón hamburguesa EN MÓVILES independizado del navbar */}
      {!open && (
        <button 
          className="mobile-hamburger"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      )}

      <div className="navbar-wrapper">

        <nav className="navbar">
          {/* Sidebar móvil */}
          <ul className={`nav-links ${open ? 'open' : ''}`}>

            {/* cierre del sidebar */}
            <button className="nav-close" onClick={() => setOpen(false)}>
              ✕
            </button>

            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#conoce" onClick={() => setOpen(false)}>Conoce más</a></li>
            <li className="nav-special-mobile">
              <a href="#felicitar" onClick={() => setOpen(false)}>Felicitar</a>
            </li>
          </ul>
        </nav>

        {/* desktop button */}
        <div className="nav-special-desktop">
          <a href="#felicitar">Felicitar</a>
        </div>
      </div>
    </>
  );
}
