// app.js
const express = require("express");
const app = express();


// Middleware setup
app.use(express.json());


app.get("/*(", (req, res) => {
  
  res.json("Hello world");
});

module.exports = app;
