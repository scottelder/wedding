const express = require("express");
const port = process.env.PORT || 3030;
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));
app.use("/img", express.static(path.join(__dirname, "../images")));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
