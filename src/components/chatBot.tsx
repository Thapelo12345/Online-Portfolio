import MessageDisplay from "./ui/chatBot/messageDisplay";
import { useEffect, useState, useRef } from "react";

type ClientMessage = {
  sender: string;
  message: string;
};

const messages: ClientMessage[] = [];

export default function ChatBot() {
  const containerRef = useRef(null);
  const [userMessage, setMessage] = useState("");
  const [client, setClient] = useState("");
  const [confessetian, setConfessetioan] = useState(false);

  useEffect(() => {
    if (confessetian) {
      setConfessetioan(false);

      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [confessetian]);

  async function sendToBot(message: string) {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{parts:[{text: message}]}]
        })
         
       })
       const data = await response.json();
       if(!data){throw new Error("Error in fetching data from bot")}

       return(
        data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I could not process your request."
       )
    } catch (error) {
      console.log(error)
      return "Sorry, there was an error processing your request."
    }
  
  }//end of sendToBot function

  return (
    <div className="flex flex-col items-center w-full h-[360px] :lgh-full p-2">
      <h1 className="border-2 w-fit h-fit px-4 p-1 rounded-lg m-2">
        Hi I am ChatBot
      </h1>

      {/* this is the chat section */}
      <div
        ref={containerRef}
        className="scrollbar-thin scrollbar-blue-500 scrollbar-track-black transition-transform duration-2000 p-2 py-8 mb-4 flex flex-col w-[90%] h-full overflow-y-auto overflow-x-hidden"
      >
        {messages.map((messageObj, index) => (
          <MessageDisplay
            key={index}
            msg={messageObj.message}
            client={messageObj.sender}
          />
        ))}
        {client === "user" && (
          <div
            className="self-center m-2 spinner-border text-primary"
            role="status"
          >
            <span className="text-white sr-only">Waiting...</span>
          </div>
        )}
      </div>
      {/* End of chat section */}

      <input
        className="w-[70%] mb-2 text-black text-sm bg-[whitesmoke] rounded-sm p-2 outline-none focus:shadow-lg shadow-green-800"
        style={{
          boxShadow: "inset 2px 2px 5px black, inset -2px -2px 5px white",
        }}
        value={userMessage}
        placeholder="Ask me a question about myself"
        onChange={(e) => setMessage(e.target.value)}
        type="text"
      />
      <button
        className="p-2 px-4 text-white bg-green-900 rounded-md"
        onClick={() => {
          if (userMessage !== "") {
            // MessageSquareShare.push(userMessage)
            setConfessetioan(true);
            setClient("user");
            messages.push({
              sender: "user",
              message: userMessage,
            });

            const botResponse = sendToBot(userMessage).then((botMessage)=>{
              setConfessetioan(true);
              setClient("bot");
              messages.push({
                sender: "bot",
                message: botMessage || "No response from bot",
              });

            })
            setMessage("");
          }
        }}
      >
        send
      </button>
    </div>
  );
}
