import BirthdayBook from './components/BirthdayBook';
import Navbar from './components/NavBar';
import Note from './components/Note';

export default function Home() {
  
  return (
    <>
      <div className="header-background"></div>
      <Navbar />
      <main id="home" className="home-main">
        <section id="home" className="section">
          <img
            src="https://res.cloudinary.com/doxlqpwtt/image/upload/v1763108303/snoopy2_gfr8ag.png"
            alt="Snoopy"
            className="snoopy-img"
          />
          <h1>Bienvenido al formulario de felicitaciones para el cumpleaños de Anne</h1>
          <p>Ayuda a forjar un recuerdo memorable para este día especial.</p>
        </section>

        <section id="conoce" className="section">
          <BirthdayBook />
        </section>

        <section id="felicitar" className="section">
          <Note />
        </section>
        
      </main>
    </>
  );
}
