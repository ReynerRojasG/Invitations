import React from 'react';
import BirthdayBook from './components/BirthdayBook';
import Navbar from './components/NavBar';

export default function Home() {
  return (
    <>
      <Navbar />
        <main id="home" className="home-main">
          <section className="section">
            <img src="https://res.cloudinary.com/doxlqpwtt/image/upload/v1763108303/snoopy2_gfr8ag.png" alt="Snoopy" className="snoopy-img" />
            <h1>Bienvenido al formulario de felicitaciones para el cumpleaños de Anne</h1>
            <p>Por favor, deja tu nombre y un mensaje especial para celebrar este día tan importante.</p>
          </section>

          <section className="section">
            <BirthdayBook />
          </section>
        </main>
    </>
  );
}