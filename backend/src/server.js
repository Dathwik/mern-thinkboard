import express from 'express';
import cors from "cors" 
import dotenv from 'dotenv';

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;




// middleware
app.use(cors({
    origin:"http://localhost:5173",
})
);
app.use(express.json()); // This middleware is used to parse incoming JSON data in the request body.
app.use(rateLimiter); // Apply the rate limiter middleware to all routes


// simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
// })

app.use("/api/notes", notesRoutes);

// What is an Endpoint?
// An endpoint is a combination of a URL and an HTTP method 
// that lets the client interact with 
// a specific resource on the server.

// app.get("/api/notes", (req,res) => {
//     res.status(200).send("you got 15 notes");
// });

// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message:"Note created sucessfully!"});
// });

// app.put("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note updated successfully!"});
// });

// app.delete("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note deleted successfully!"});
// });

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});
