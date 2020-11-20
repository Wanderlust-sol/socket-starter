// const app = require("express")();
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   socket.on("chat", (msg) => {
//     console.log("message: " + msg.message);
//     io.emit("chat", msg.message);
//   });
// });

// http.listen(3000, () => {
//   console.log("listening on *:3000");
// });

// var WebSocketServer = require("ws").Server;
// var wss = new WebSocketServer({ port: 8100 });

// wss.on("open", function open() {
//   console.log("connected");
//   const obj = {
//     totGeneModel: "3333",
//     lastNickname: "숭구리당당 원숭이",
//   };

//   wss.send(obj);
// });

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });
  const obj = {
    totGeneModel: "3333",
    lastNickName: "호이짜호이짜 날아라고양이",
  };

  setInterval(function timeout() {
    obj.totGeneModel = (obj.totGeneModel * 1 + 1).toString();
    ws.send(JSON.stringify(obj));
  }, 10000);
});
