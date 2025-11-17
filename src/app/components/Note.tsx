'use client';
import "../styles/Note.css";
import { useState } from "react";

export default function Note() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío (guardar, mostrar, etc.)
    console.log("Nombre:", name);
    console.log("Mensaje:", message);
    setName("");
    setMessage("");
  };

  return (
    <div className="note-container">
      <h2 className="note-title">Enviar felicitación</h2>
      <p>Tu nota se convertirá en una notita física para el cumpleaños de Anne, procura que sea breve y si lo deseas extender puedes decírselo en privado el 04 de diciembre.</p>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="note-input"
          required
        />
        <textarea
          placeholder={`Nota de ejemplo: Feliz día Anne, gracias por ser una persona tan especial para nosotros.`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="note-textarea"
          required
        />
        <button type="submit" className="note-submit">Enviar</button>
      </form>
    </div>
  );
}
