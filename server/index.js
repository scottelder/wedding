const express = require("express");
const port = process.env.PORT || 3030;
const app = express();
const axios = require("axios");

app.use(express.static("./dist"));
app.use(express.static("./images"));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
