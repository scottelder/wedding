require("dotenv").config;
const express = require("express");
const port = process.env.PORT || 3030;
const app = express();
const path = require("path");

// const db = require("./db");

app.use("/", express.static(path.join(__dirname, "../dist")));
app.use("/rsvp", express.static(path.join(__dirname, "../dist")));
app.use("/about", express.static(path.join(__dirname, "../dist")));
app.use("/img", express.static(path.join(__dirname, "../images")));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
