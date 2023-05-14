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

io.on("connection", socket => {
  socketsConnected.push(socket.id);
  // console.log("Clientes conectados: :", io.engine.clientsCount)
  // console.log("Id del socket", socket.id);

  // socket.on("disconnect", () => {
  //   console.log("Desconected: " + socket.id);
  // });

  // socket.conn.once("upgrade", () => {
  //   console.log("using", socket.conn.transport.name);
  // });

  socket.emit("welcome", "Connected");
  socket.on("button", console.log);
  io.emit("everyone","A new user has been connected: " + socket.id);

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

  socket.on("circle-position", position => {
    socket.broadcast.emit("move-circle", position);
  });
});

httpServer.listen(3000);