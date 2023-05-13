const socket = io();

socket.on("connect", () => {
  console.log("Socket connected: ", socket.id);
  checkSocketStatus();
});

socket.on("disconnect", () => {
  console.log("Socket disconnected: ", socket.id);
  checkSocketStatus();
});

socket.on("connect_error", () => {
  console.log("Imposible to connect");
});

function checkSocketStatus() {
  console.log("Socket connected: ", socket.connected);
}

socket.io.on("reconnect_attempt", () => {
  console.log("Trying to reconnect");
});

socket.io.on("reconnect", () => {
  console.log("Reconnected");
});
