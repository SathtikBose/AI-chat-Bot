import { GoogleGenAI } from "@google/genai";
import Header from "./components/Header";
import Container from "./components/Container";
import { useEffect, useState } from "react";
import InputContainer from "./components/InputContainer";
import Button from "./components/Button";

const key = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [chat, setChat] = useState([
    {
      chat: "user",
      message: "Hi",
    },
    {
      chat: "bot",
      message:
        " Hey there! 👋 How's your day going? I hope it's filled with positive vibes and good energy. Let's make it a great one!",
    },
  ]);
  const [prompt, setPrompt] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function ChatAdding(newMessage) {
    setChat((prevChat) => [...prevChat, newMessage]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!prompt) return;

    setIsLoading(true);
    setIsError(false);

    try {
      ChatAdding({ chat: "user", message: prompt });

      const ai = new GoogleGenAI({ apiKey: key });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `${prompt} in 2 to 4 lines if required then increase`,
      });

      ChatAdding({ chat: "bot", message: response.text });
    } catch (err) {
      console.error("Unable to fetch data from the API");
      setIsError(true);
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  }

  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <div>
        <Header />
        <Container startingChat={chat} isError={isError} />
      </div>
      <form
        className="d-flex flex-column flex-md-row justify-content-between gap-3 w-100"
        onSubmit={handleSubmit}
      >
        <InputContainer setPrompt={setPrompt} prompt={prompt} />
        <Button isLoading={isLoading} prompt={prompt} />
      </form>
    </div>
  );
}

export default App;
