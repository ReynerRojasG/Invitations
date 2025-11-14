'use client';
import "../styles/Book.css";
import HTMLFlipBook from 'react-pageflip';
import { useEffect, useState } from 'react';

const birthdayPage = {
  title: '📅 04 de diciembre de 2004',
  content: 'Ese día nació alguien especial. Hoy, 21 años después, agradecemos todo lo que es: creativa, sensible, brillante y amorosa.',
};

const passionsPages = [
  {
    title: '🌸 Anne with an E',
    content: 'Tu amor por Anne Shirley es un reflejo de tu espíritu libre, curioso y lleno de imaginación. Como ella, ves belleza en lo simple y fuerza en lo sensible.',
  },
  {
    title: '🧙‍♂️ Harry Potter',
    content: 'Desde Hogwarts hasta Hogsmeade, tu corazón ha viajado con magia. Eres una mezcla perfecta entre la valentía de Hermione y la ternura de Luna Lovegood.',
  },
  {
    title: '🐶 Snoopy',
    content: 'Tu cariño por Snoopy dice mucho: te encantan los personajes que combinan humor, ternura y un toque filosófico. Como él, sabes disfrutar de los pequeños placeres.',
  },
];

const petsPage = {
  title: '🐾 Tobey, Kay y Copito',
  content: 'Tus mascotas han sido parte de tu historia, cada una dejando huellas únicas. Tobey con su energía, Kay con su dulzura, y Copito con su ternura blanca.',
};

const finalPage = {
  title: '💖 Gracias por existir',
  content: 'Este libro es solo un pequeño homenaje a todo lo que te hace especial. ¡Feliz cumpleaños Anne!',
};

export default function Book() {
  const [size, setSize] = useState({ width: 300, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({ width: 220, height: 300 }); // 👈 tamaño más pequeño en móviles
      } else {
        setSize({ width: 300, height: 400 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="container">
      <HTMLFlipBook
        width={300}
        height={400}
        showCover={true}
        size="stretch"
        className="demoBook"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={false}
        mobileScrollSupport={true}
        useMouseEvents={true}
        clickEventForward={true}
        startZIndex={0}
        autoSize={false}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        style={{}}             
        startPage={0}        
        maxShadowOpacity={0.5}  
      >
        {/* Portada principal */}
        <div className="demoPage page cover" style={{ position: 'relative' }}>
          <div className="cover-background"></div>
          <div className="page-content" style={{ position: 'relative', zIndex: 1 }}>
            <h2>Feliz cumpleaños Anne</h2>
          </div>
        </div>

        {/* Fecha */}
        <div className="demoPage page">
          <div className="page-content">
            <div className="anne-container">
              <img
                src="https://res.cloudinary.com/doxlqpwtt/image/upload/v1762753271/Imagen_de_WhatsApp_2025-11-09_a_las_23.39.32_8cd849b4_slzz0f.jpg"
                alt="Anne cumpleaños"
              />
            </div>
            <h2>{birthdayPage.title}</h2>
            <p>{birthdayPage.content}</p>
          </div>
        </div>

        {/* Portada de sección: Pasiones */}
        <div className="demoPage page cover" style={{ position: 'relative' }}>
          <div className="cover-background"></div>
          <div className="page-content" style={{ position: 'relative', zIndex: 1 }}>
            <h2>✨ Pasiones</h2>
          </div>
        </div>

        {/* Pasiones */}
        {passionsPages.map((page, index) => (
          <div className="demoPage page" key={index}>
            <div className="page-content">
              <h2>{page.title}</h2>
              <p>{page.content}</p>
            </div>
          </div>
        ))}

        {/* Portada de sección: Mascotas */}
        <div className="demoPage page cover" style={{ position: 'relative' }}>
          <div className="cover-background"></div>
          <div className="page-content" style={{ position: 'relative', zIndex: 1 }}>
            <h2>🐾 Mascotas</h2>
          </div>
        </div>

        {/* Mascotas */}
        <div className="demoPage page">
          <div className="page-content">
            <h2>{petsPage.title}</h2>
            <p>{petsPage.content}</p>
          </div>
        </div>

        {/* Portada de sección: Final */}
        <div className="demoPage page cover" style={{ position: 'relative' }}>
          <div className="cover-background"></div>
          <div className="page-content" style={{ position: 'relative', zIndex: 1 }}>
            <h2>💖 Final</h2>
          </div>
        </div>

        {/* Final */}
        <div className="demoPage page">
          <div className="page-content">
            <h2>{finalPage.title}</h2>
            <p>{finalPage.content}</p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}