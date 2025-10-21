export async function sendToBot(message: string) {
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
