import React, { useState, useEffect } from "react";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import "./styles.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAdHjAp2i-vne5AKymbrK8T2nsg54VjK2Y"; // Replace with your actual API key

function App() {
  const [chatHistory, setChatHistory] = useState([
    { role: "user", parts: [{ text: "Hello, I have 2 dogs in my house." }] },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ]);

  const [pergunta, setPergunta] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        candidateCount: 1,
        temperature: 0.5,
      },
    });

    const chat = model.startChat({
      history: chatHistory,
    });

    const sendMessage = async () => {
      if (pergunta) {
        setIsLoading(true);

        try {
          const result = await chat.sendMessage(pergunta);
          const response = await result.response;
          const text = response.text();
          setChatHistory([
            ...chatHistory,
            { role: "user", parts: [{ text: pergunta }] },
            { role: "model", parts: [{ text: text }] },
          ]);
          setPergunta("");
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    sendMessage();
  }, [chatHistory, pergunta]);

  const handlePerguntaChange = (novaPergunta) => {
    setPergunta(novaPergunta);
  };

  return (
    <div className="chat-container">
      <ChatInterface
        chatHistory={chatHistory} // Pass chat history to
        onPerguntaChange={handlePerguntaChange}
        isLoading={isLoading} // Pass loading state
      />
    </div>
  );
}

export default App;
