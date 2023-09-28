const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());

const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello, I am live");
});

// Add a route to get unique categories from the data
app.get("/categories", (req, res) => {
  const categories = [...new Set(apiData.map((item) => item.category))];
  res.json(categories);
});

app.get("/search", (req, res) => {
  // Get the search term from the query parameters
  const searchTerm = req.query.searchTerm;

  console.log("Search Term:", searchTerm); // Add this line for debugging

  // If no search term is provided, return a message
  if (!searchTerm) {
    return res.json({ message: "Please provide a search term" });
  }

  // Use a regular expression to perform a case-insensitive search
  const regex = new RegExp(searchTerm, "K");

  console.log("Regex:", regex); // Add this line for debugging

  // Filter the apiData array based on the search term
  const filteredProducts = apiData.filter((item) => regex.test(item.title));

  console.log("Filtered Products:", filteredProducts); // Add this line for debugging

  // Check if there are matching products
  if (filteredProducts.length === 0) {
    return res.json({ message: "No matching products found" });
  }

  res.json(filteredProducts);
});

// Add a route to retrieve all products
app.get("/products", (req, res) => {
  res.json(apiData);
});

app.listen(port, () => {
  console.log("Server is live and listening on port " + port);
});
