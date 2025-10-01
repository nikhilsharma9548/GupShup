import express from 'express'
import cors from 'cors'
import "dotenv/config"
import http from 'http'
import { escape } from 'querystring';
import { connectDB } from './lib/db.js';

//  Create Express App and HTTP server

const app = express();
const server = http.createServer(app)

//MiddleWare
app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use("/api/status", (req, res) => res.send("server is live"))

// connect to mongoDB
await connectDB();


const PORT = process.env.PORT || 8000 
server.listen(PORT, () => console.log("Server is running on PORT:" + PORT));



