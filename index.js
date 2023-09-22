const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hello Iam live");
});
app.get("/service", (req, res) => {
  res.send(apiData);
});
app.listen(port, () => {
  console.log("I am Live  ");
});
