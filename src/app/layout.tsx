// src/app/layout.tsx
import type { Metadata } from "next";
import "./styles/App.css";

export const metadata: Metadata = {
  title: "Formulario de Felicitaciones",
  description: "Deja tu mensaje para el cumpleaños de Anne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Importación de PT Sans desde Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: '"PT Sans", "Helvetica Neue", Arial, sans-serif',
        }}
        className="antialiased bg-gradient-to-b from-[#f6c8c7] to-[#fffdfd] text-black min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
