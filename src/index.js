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

io.on("connection", socket => {
  console.log("Clientes conectados: :", io.engine.clientsCount)
  console.log("Id del socket", socket.id);

  socket.on("disconnect", () => {
    console.log("Desconected: " + socket.id);
  });

  socket.conn.once("upgrade", () => {
    console.log("using", socket.conn.transport.name);
  });
});

httpServer.listen(3000);