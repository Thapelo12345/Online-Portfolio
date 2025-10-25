import MessageDisplay from "./ui/chatBot/messageDisplay";
import { useEffect, useState, useRef } from "react";
import { SendIcon } from "lucide-react";
import { sendToBot } from "@/function/chatBot/getMessage";
import { getMessage } from "@/function/chatBot/getMessage";


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

  function handleClick() {
    if (userMessage !== "") {
      // MessageSquareShare.push(userMessage)
      setConfessetioan(true);
      setClient("user");
      messages.push({
        sender: "user",
        message: userMessage,
      });

      const botResponse = getMessage(userMessage).then((botMessage) => {
        setConfessetioan(true);

        // saving the question and answer to a json file
        if ("can't answer that question right now" === botMessage) {
          
          fetch("/questions.json").then((res)=> res.json())
          .then((data) => {
            data.push(userMessage)
          })
          .catch((error)=> console.log(error))

          console.log(userMessage);
        } //end of if statement
        setClient("bot");
        messages.push({
          sender: "bot",
          message: botMessage || "No response from bot",
        });
      }); //end botResponse
      getMessage(userMessage);

      /*
      const botResponse1 = getMessage(userMessage)
      if(botResponse1){
        setConfessetioan(true);
        setClient("bot");
         messages.push({
          sender: "bot",
          message: botResponse1 || "No response from bot",
        });

      }
    */
      setMessage("");
    }
  } //end of handle click

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-[360px] :lgh-full p-2">
      <h1 className="bg-primary/20 text-sm md:text-lg font-bold text-blue-500 w-fit h-fit px-4 p-1 rounded-lg m-2">
        ASK ME ANY QUETSION
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
        className="w-[70%] mb-2 text-black text-sm bg-[whitesmoke] rounded-md p-2 outline-none focus:shadow-lg shadow-green-800"
        value={userMessage}
        placeholder="Ask me a question about myself"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Add this line
        type="text"
      />
      <button
        id="sendBtn"
        className="p-2 px-4 font-bold text-lg text-primary bg-primary/20 rounded-md"
        onClick={() => handleClick()}
      >
        <SendIcon className="text-primary" size={20} />
      </button>
    </div>
  );
}
