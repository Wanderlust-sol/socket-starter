const socket = io.connect("http://localhost:3000");

const message = document.getElementById("m");
const sendBtn = document.getElementById("send");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
  });
});

socket.on("chat", (data) => {
  messages.innerHTML += "<p>" + data.message + "</p>";
});
