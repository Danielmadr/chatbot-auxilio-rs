import React from "react";
import Mensagem from "../Mensagem/Mensagem";
import InputBox from "../InputBox/InputBox";

function ChatInterface({ chatHistory, onPerguntaChange, isLoading }) {
  return (
    <div className="chat-interface">
      <div className="historico-conversa">
        {chatHistory.map((mensagem, index) => (
          <Mensagem
            key={index}
            texto={mensagem.parts[0].text}
            tipo={mensagem.role}
          />
        ))}
        {isLoading && <p>Loading...</p>} {/* Show loading indicator */}
      </div>
      <InputBox onPerguntaChange={onPerguntaChange} />
    </div>
  );
}
export default ChatInterface;
