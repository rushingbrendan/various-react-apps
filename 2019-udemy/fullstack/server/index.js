const express = require("express");
const app = express();
const listenPort = 5000;

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(listenPort);
