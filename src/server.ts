import express from "express";
import mongoose from "mongoose";
import config from "../config";
import cors from "cors";

// import { db } from "./database";

import productsRouter from "./routes/products"; // ESModules
import categoriesRouter from "./routes/categories";
// const express = require('express') => CommonJS

const PORT = config.PORT;

const app = express();

// try {
//   console.log("Trying connect MongoDB");
//   db.connect();
// } catch (e) {
//   console.log(e);
// }
async function connectDB() {
  console.log("Be sure MongoDB is up");
  const db = await mongoose.connect(config.MONGO_URI);
  console.log("connected to mongo", db.connection.db.databaseName);
}
connectDB();

app.use(express.json()); // middleware to transform req.body to json
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_req, res) => {
  res.send("Welcome to Vulcanos Bakery API");
});

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server running on por ${PORT}`);
});
