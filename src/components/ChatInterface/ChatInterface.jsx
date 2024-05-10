import React from "react";
import Mensagem from "../Mensagem/Mensagem";

function ChatInterface({ ultimaMensagem, isLoading }) {
  return (
    <div className="chat-interface">
      {ultimaMensagem.pergunta && (
        <Mensagem
          texto={ultimaMensagem.pergunta.parts[0].text}
          tipo={ultimaMensagem.pergunta.role}
        />
      )}
      {ultimaMensagem.resposta && (
        <Mensagem
          texto={ultimaMensagem.resposta.parts[0].text}
          tipo={ultimaMensagem.resposta.role}
        />
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
export default ChatInterface;
