import express from "express";
import ViteExpress from "vite-express";
import fs from "fs";

const app = express();
app.use(express.json());


app.post("/save-question", (req, res) => {
    console.log("message recievded moving on!.")
     const { userQuestion } = req.body;

     console.log( userQuestion )
    res.json({ message: "message recieved" });}
);

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));