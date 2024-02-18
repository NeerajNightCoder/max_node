const http = require("http");
const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send(<h1>Hi from Node server</h1>);
});

const server = http.createServer(app);
server.listen(5000);
