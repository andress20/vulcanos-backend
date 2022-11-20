import express from "express";
import { db } from "./database";

import productsRouter from "./routes/products"; // ESModules
// const express = require('express') => CommonJS

const PORT = process.env.PORT || 8001;

const app = express();
try {
  console.log("Trying connect MongoDB");
  db.connect();
} catch (e) {
  console.log(e);
}
app.use(express.json()); // middleware to transform req.body to json

app.get("/", (_req, res) => {
  res.send("Welcome to Vulcanos Bakery API");
});

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on por ${PORT}`);
});
