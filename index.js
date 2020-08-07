const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    console.log("message: " + msg.message);
    io.emit("chat", msg.message);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
