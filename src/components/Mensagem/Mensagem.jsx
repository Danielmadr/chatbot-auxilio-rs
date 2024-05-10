import React from "react";
import "./styles.css";
import { marked } from "marked";

function Mensagem({ texto, tipo }) {
  const classe = tipo === "usuario" ? "mensagem usuario" : "mensagem chatbot";

  const renderContent = (texto) => {
    const rawMarkup = marked(texto, { sanitize: true });
    // Aqui você pode adicionar a lógica para renderizar Markdown ou HTML
    // Por exemplo, usando uma biblioteca de terceiros para converter Markdown em HTML
    // Neste exemplo, estou assumindo que o texto já está formatado como Markdown
    return { __html: rawMarkup };
  };

  return (
    <div className={classe} dangerouslySetInnerHTML={renderContent(texto)} />
  );
}

export default Mensagem;
