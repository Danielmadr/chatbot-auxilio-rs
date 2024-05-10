import React from "react";
import "./styles.css";

function Mensagem({ texto, tipo }) {
  const classe = tipo === "usuario" ? "mensagem usuario" : "mensagem chatbot";

  return <div className={classe}>{texto}</div>;
}

export default Mensagem;
