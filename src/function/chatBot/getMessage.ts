import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
// import { MemoryVectorStore } from "langchain/vectorstores/memory";

const appKey = import.meta.env.VITE_GOOGLE_API_KEY


async function textPrompt(){
  const textPrompt = await fetch("/src/function/chatBot/Ai propmt.txt")
  const text = await textPrompt.text()
  return text
}

const embed = new GoogleGenerativeAIEmbeddings({
  apiKey: appKey,
  model: "text-embedding-004", // 768 dimensions
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: "Document title",
});

// const text = await textPrompt()
// const vectorstore = await MemoryVectorStore.fromDocuments(
//   [{ pageContent: text, metadata: {} }],
//   embed
// );


const model = new ChatGoogleGenerativeAI({
    apiKey: appKey, 
  model: "gemini-2.5-flash",
  temperature: 0
});



async function getMessage(message: string){

  const getText = await textPrompt()
const prompt = `
you are thapelo petrick sikhosana
 Based on the following information, answer the question:
  
  INFORMATION:
  ${getText}
  
  QUESTION: ${message}
  
  Answer concisely and accurately based only on the provided information.
  **IMPORTANT: If the answer to the question cannot be found in the provided information, respond with exactly: "can't answer that question right now"**
  `

    const res =  await model.invoke([
      { role: "user", content: prompt }
    ])
     
    return res.content.toString()
}


async function sendToBot(message: string) {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${appKey}`
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

  export { sendToBot, getMessage}

