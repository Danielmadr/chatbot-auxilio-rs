import React, { useState, useEffect } from "react";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import "./styles.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import InputBox from "./components/InputBox/InputBox";

const API_KEY = "AIzaSyAdHjAp2i-vne5AKymbrK8T2nsg54VjK2Y";
//process.env.GEMINI_API_KEY; // Replace with your actual API key

function App() {
  const [ultimaMensagem, setUltimaMensagem] = useState({});
  const [pergunta, setPergunta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
      generationConfig: {
        candidateCount: 1,
        temperature: 0.5,
      },
    });

    const chat = model.startChat();

    const sendMessage = async () => {
      if (pergunta) {
        setIsLoading(true);

        try {
          const result = await chat.sendMessage(pergunta);
          const response = await result.response;
          const text = response.text();
          setUltimaMensagem({
            pergunta: { role: "user", parts: [{ text: pergunta }] },
            resposta: { role: "model", parts: [{ text: text }] },
          });
          setPergunta("");
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    sendMessage();
  }, [pergunta]);

  const handlePerguntaChange = (novaPergunta) => {
    setPergunta(novaPergunta);
  };

  return (
    <div className="chat-container">
      <div className="chat-content">
        <h1>Chatbot de Auxílio ao RS</h1>
        <h3 className="title">Como Apoiar as Vítimas das Enchentes</h3>
        <ChatInterface ultimaMensagem={ultimaMensagem} isLoading={isLoading} />
      </div>
      <div className="chat-input">
        <InputBox onPerguntaChange={handlePerguntaChange} />
      </div>
    </div>
  );
}

export default App;
