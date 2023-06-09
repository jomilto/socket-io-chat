const { log } = require("console");
const { Socket } = require("dgram");
const express = require("express");
const { createServer } = require("http");
const path = require("path");

const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const socketsConnected = [];

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token === "TokenGenial") {
    next();
  }
  else {
    const err = new Error("Token invalid.");
    err.data = {
      details: "You can't be authenticated."
    };
    next(err);
  }
});

io.on("connection", socket => {
  // socket.connectedRoom = "";
  // socketsConnected.push(socket.id);
  // console.log("Clientes conectados: :", io.engine.clientsCount)
  // console.log("Id del socket", socket.id);

  // socket.on("disconnect", () => {
  //   console.log("Desconected: " + socket.id);
  // });

  // socket.conn.once("upgrade", () => {
  //   console.log("using", socket.conn.transport.name);
  // });

  // socket.emit("welcome", "Connected");
  // socket.on("button", console.log);
  // io.emit("everyone","A new user has been connected: " + socket.id);

  // on - listen the event everyTime it's emmited
  // once - listen the event once it's emmited
  // off - to turn off an event, we need to use a named arrow function
  // socket.on("last", message => {
  //   const lastSocket = socketsConnected[socketsConnected.length -1];
  //   io.to(lastSocket).emit("salute", message);
  // });

  // socket.emit("off", "Connected");
  // setTimeout(() => {
  //   socket.emit("off", "Connected");
  // }, 3000);

  // socket.on("circle-position", position => {
  //   socket.broadcast.emit("move-circle", position);
  // });

  // socket.on("connect-to-room", room => {

  //   if (socket.connectedRoom) socket.leave(socket.connectedRoom);
  //   switch (room) {
  //     case "room1":
  //       socket.join("room1");
  //       socket.connectedRoom = "room1";
  //       break;
  //     case "room2":
  //         socket.join("room2");
  //         socket.connectedRoom = "room2";
  //         break;
  //     case "room3":
  //       socket.join("room3");
  //       socket.connectedRoom = "room3";
  //       break;
  //   }
  // });

  // socket.on("message", message => {
  //   const room = socket.connectedRoom;
  //   io.to(room).emit("message-to-show", {
  //     message,
  //     room
  //   });
  // });

  // socket.on("is-connected", console.log);
  console.log(socket.id);
});

// const teachers = io.of("teachers");
// const students = io.of("students");

// teachers.on("connection", socket => {
//   console.log("Connected to teachers room: ", socket.id);
//   socket.on("send-message", data => {
//     teachers.emit("message", data);
//   });
// });

// students.on("connection", socket => {
//   console.log("Connected to students room: ", socket.id);
//   socket.on("send-message", data => {
//     students.emit("message", data);
//   });
// });

httpServer.listen(3000);