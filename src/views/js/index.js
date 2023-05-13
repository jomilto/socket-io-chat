const socket = io();

// socket.on("connect", () => {
//   console.log("Socket connected: ", socket.id);
//   checkSocketStatus();
// });

// socket.on("disconnect", () => {
//   console.log("Socket disconnected: ", socket.id);
//   checkSocketStatus();
// });

// socket.on("connect_error", () => {
//   console.log("Imposible to connect");
// });

// function checkSocketStatus() {
//   console.log("Socket connected: ", socket.connected);
// }

// socket.io.on("reconnect_attempt", () => {
//   console.log("Trying to reconnect");
// });

// socket.io.on("reconnect", () => {
//   console.log("Reconnected");
// });

socket.on("welcome", message => {
  let textP = document.getElementById("text");
  textP.textContent = message;
});

let button = document.getElementById("emit-to-server");
button.addEventListener("click", () => {
  socket.emit("button", "hola desde el frontend");
});

socket.on("everyone", message => {
  let textP = document.getElementById("everyone");
  textP.textContent += message;
});

const emitToLast = document.getElementById("emit-to-last");
emitToLast.addEventListener("click", () => {
  socket.emit("last", "Hola");
});

socket.on("salute", message => {
  let textP = document.getElementById("salute");
  textP.textContent += message;
});

const listener = () => {
  console.log("Turning off the event");
}

socket.on("off", listener);

setTimeout(() => {
  socket.off("off", listener);
}, 2000)