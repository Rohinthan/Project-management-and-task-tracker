import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.error(" DB Connection Error:", err));

// Simple route
app.get("/", (req, res) => {
  res.send("PM-Tracker Backend Running...");
});

// Socket.IO setup
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" }});
io.on("connection", (socket) => {
  console.log(" New user connected");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server on port ${PORT}`));
