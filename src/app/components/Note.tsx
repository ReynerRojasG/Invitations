'use client';
import "../styles/Note.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Note() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
        toast.success("Nota enviada exitosamente");
        setName("");
        setMessage("");
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.error || "No se pudo enviar la nota"}`);
      }
    } catch (error) {
      toast.error("Error de conexión con el servidor");
    }
  };

  return (
    <div className="note-container">
      <h2 className="note-title">Enviar felicitación</h2>
      <p>
        Tu nota se convertirá en una notita física para el cumpleaños de Anne,
        procura que sea breve y si lo deseas extender puedes decírselo en privado el 04 de diciembre.
      </p>
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
