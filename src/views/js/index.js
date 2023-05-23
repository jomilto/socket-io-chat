const socket = io({
  auth: {
    token: "TokenGenial"
  }
});

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

// socket.on("welcome", message => {
//   let textP = document.getElementById("text");
//   textP.textContent = message;
// });

// let button = document.getElementById("emit-to-server");
// button.addEventListener("click", () => {
//   socket.emit("button", "hola desde el frontend");
// });

// socket.on("everyone", message => {
//   let textP = document.getElementById("everyone");
//   textP.textContent += message;
// });

// const emitToLast = document.getElementById("emit-to-last");
// emitToLast.addEventListener("click", () => {
//   socket.emit("last", "Hola");
// });

// socket.on("salute", message => {
//   let textP = document.getElementById("salute");
//   textP.textContent += message;
// });

// const listener = () => {
//   console.log("Turning off the event");
// }

// socket.on("off", listener);

// setTimeout(() => {
//   socket.off("off", listener);
// }, 2000)

// const drag = ({ clientX, clientY }) => {
//   const position = {
//     top: clientY + "px",
//     left: clientX + "px"
//   };

//   drawCircle(position);
//   socket.emit("circle-position", position);
// };

// const drawCircle =  ({top, left}) => {
//   circle.style.top = top;
//   circle.style.left = left;
// };

// const circle = document.getElementById("circle");
// document.addEventListener("mousedown", e => {
//   document.addEventListener("mousemove", drag);
// });

// document.addEventListener("mouseup", e => {
//   document.removeEventListener("mousemove", drag);
// });

// socket.on("move-circle", drawCircle);

// const connectRoom1 = document.getElementById("connectToRoom1");
// const connectRoom2 = document.getElementById("connectToRoom2");
// const connectRoom3 = document.getElementById("connectToRoom3");

// connectRoom1.addEventListener("click", () => {
//   socket.emit("connect-to-room", "room1");
// });

// connectRoom2.addEventListener("click", () => {
//   socket.emit("connect-to-room", "room2");
// });

// connectRoom3.addEventListener("click", () => {
//   socket.emit("connect-to-room", "room3");
// });

// const sendMessage = document.getElementById("sendMessage");

// sendMessage.addEventListener("click", () => {
//   const message = prompt("Write your message:");
//   socket.emit("message", message);
// })

// socket.on("message-to-show", ({ message, room }) => {
//   const li = document.createElement("li");
//   li.textContent = message;
//   const ul = document.getElementById(room);
//   ul.appendChild(li);
// });

// const user = prompt("Type your username:");

// const teachers = [
//   "teacher1",
//   "teacher2",
//   "teacher3",
// ];

// let socketNamespace, group;

// const chat = document.getElementById("chat");
// const namespace = document.getElementById("namespace");

// if (teachers.includes(user)) {
//   socketNamespace = io("/teachers");
//   group = "teachers";
// } 
// else {
//   socketNamespace = io("/students");
//   group = "students";
// }

// socketNamespace.on("connect", () => {
//   namespace.textContent = group;
// });

// const button = document.getElementById("sendMessage");
// button.addEventListener("click", () => {
//   const message = prompt("Type your message:");
//   socketNamespace.emit("send-message", {
//     message,
//     user
//   });
// });

// socketNamespace.on("message", ({ user, message}) => {
//  const li = document.createElement("li");
//  li.textContent = `${user}: ${message}`;
//  chat.appendChild(li);
// });

// const send = document.getElementById("send");
// const disconnect = document.getElementById("disconnect");
// const connect = document.getElementById("connect");

// send.addEventListener("click", () => {
//   socket.volatile.emit("is-connected", "Connected");
// });

// disconnect.addEventListener("click", () => {
//   socket.disconnect();
// });

// connect.addEventListener("click", () => {
//   socket.connect();
// });

socket.on("connect_error", (err) => {

})