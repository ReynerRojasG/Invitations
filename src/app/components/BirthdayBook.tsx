'use client';
import "../styles/Book.css";
import HTMLFlipBook from 'react-pageflip';
import { useEffect, useState } from 'react';

const birthdayPage = {
  title: '📅 04/12/2004',
  content: 'Ese día nació alguien especial. Por eso hoy, 21 años después, agradecemos todo lo que eres: creativa, sensible, brillante y amorosa.',
};

const passionsPages = [
  {
    title: '🌸 Anne with an E',
    content: 'Como Anne Shirley tienes un espíritu libre, curioso y lleno de imaginación. Como ella, ves belleza en lo simple y fuerza en lo sensible.',
  },
  {
    title: '🧙‍♂️ Harry Potter',
    content: 'Desde Hogwarts hasta Hogsmeade, tu corazón es mágico. Reflejas la valentía de Hermione y la ternura de Luna Lovegood.',
  },
  {
    title: '🐶 Snoopy',
    content: 'Como él, sabes disfrutar de las pequeñas cosas, además eres igual de tierna y dulce.',
  },
];

const finalPage = {
  title: '💖 Gracias por existir',
  content: 'Este libro es solo un pequeño homenaje a todo lo que te hace especial. ¡Feliz cumpleaños Anne!',
};

export default function Book() {
  const [size, setSize] = useState({ width: 100, height: 200 });
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({ width: 220, height: 300 });
        setPortrait(true);
      } else {
        setSize({ width: 300, height: 400 });
        setPortrait(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return ( 
    <div className="container">
      <h2 className="book-title">Libreta de información</h2>
      <HTMLFlipBook
        width={size.width}
        height={size.height}
        showCover={false}
        size="stretch"
        className="demoBook"
        minWidth={size.width}
        maxWidth={size.width}
        minHeight={size.height}
        maxHeight={size.height}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={portrait}
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

        {/* Tobby */}
        <div className="demoPage page">
          <div className="page-content">
            <div className="anne-container">
              <img
                src="https://res.cloudinary.com/doxlqpwtt/image/upload/v1763341995/tobby_uqetcc.jpg"
                alt="Tobby"
              />
            </div>
            <span className="tags tag-tobby">Tobby</span>
            <p>Lleno de energía y alegría, refleja que la felicidad llega cuando tú estás.</p>
          </div>
        </div>

        {/* Kai y Copito */}
        <div className="demoPage page">
          <div className="page-content">
            <div className="anne-container">
              <img
                src="https://res.cloudinary.com/doxlqpwtt/image/upload/v1763341998/kai_y_copito_cenjqs.jpg"
                alt="Kai y Copito"
              />
            </div>
            <div>
              <span className="tags tag-kai">Kai</span>
              <span className="tags tag-copito">Copito</span>
            </div>
            <p>Tus conejitas son tu preciado tesoro, habla mucho de lo cuidadosa que eres con todo.</p>
          </div>
        </div>

        {/* Oli */}
        <div className="demoPage page">
          <div className="page-content">
            <div className="anne-container">
              <img
                src="https://res.cloudinary.com/doxlqpwtt/image/upload/v1763341995/oli_plrxrs.jpg"
                alt="Oli"
              />
            </div>
            <span className="tags tag-oli">Oli</span>
            <p>Tu periquito fue tu fiel acompañante, es por eso que eres única hasta el final.</p>
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