const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hello I am live");
});

// Add a route to get unique categories from the data
app.get("/categories", (req, res) => {
  const categories = [...new Set(apiData.map((item) => item.category))];
  res.json(categories);
});

app.get("/products", (req, res) => {
  res.json(apiData);
});

app.listen(port, () => {
  console.log("I am Live");
});
