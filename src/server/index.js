var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

// start listening in terminal: node src/server/index.js

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
