require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3030;
const app = express();
const path = require("path");
app.use(express.json());

const { upsertRsvp, selectAll } = require("./db");

app.use(express.static(path.join(__dirname, "../dist")));
app.use("/img", express.static(path.join(__dirname, "../images")));

app.post("/submit", (req, res) => {
  const callback = (err, data) => {
    if (err) res.status(500).send(`failed to insert data with error ${err}`);
    else res.send(`successuflly uploaded}`);
  };
  upsertRsvp(req.body, callback);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
