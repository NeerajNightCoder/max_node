const http = require("http");
const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send(<h1>Hi from Node server</h1>);
});

app.use("/products", (req, res) => {
  res.send(<h1>here are some products</h1>);
});

const server = http.createServer(app);
server.listen(5000);
