const express = require("express");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const http = require("http");
require("dotenv").config();
const cors = require("cors");
const socketIo = require("socket.io");
const mongoose = require("mongoose");

const authRouter = require("./src/router/authRouter");
const userRouter = require("./src/router/userRouter");

const app = express();

const PORT = process.env.PORT || 4002;

//cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // origin: "netlify"
    origin: "*",
    // methods: ["GET", "POST", "DELETE"]
    // origin: "http://localhost:3000",
  },
});

// middlewear
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// routes
app.use("/api", authRouter);
app.use("/api", userRouter);

// websocket functions

let activeUsers = [];

io.on("connection", (socket) => {
  socket.on("new-user-added", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
    }

    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);

    io.emit("get-users", activeUsers);
  });

  socket.on("exit", (id) => {
    activeUsers = activeUsers.filter((user) => user.userId !== id);

    io.emit("get-users", activeUsers);
  });

  socket.on("send-message", (data) => {
    const { receivedId } = data;
    const user = activeUsers.find((user) => user.userId === receivedId);
    if (user) {
      io.to(user.socketId).emit("answer-message", data);
    }
  });
});

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server responded at ${PORT} PORT...`);
    });
  })
  .catch((error) => console.log(error));
