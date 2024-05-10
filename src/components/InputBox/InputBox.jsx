import React, { useState } from "react";
import "./styles.css";

function InputBox({ onPerguntaChange }) {
  const [novaPergunta, setNovaPergunta] = useState("");

  const handleInputChange = (event) => {
    setNovaPergunta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPerguntaChange(novaPergunta);
    setNovaPergunta("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-box">
      <input
        type="text"
        value={novaPergunta}
        onChange={handleInputChange}
        placeholder="Digite sua pergunta..."
        style={{ fontSize: "18px" }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default InputBox;
