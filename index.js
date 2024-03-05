const express = require("express");
const connectDB = require("./config/Db");
const Product = require("./product.model.js");
const productRouter=require("./routes/product.router")

const app = express();
const port = 3000;

connectDB();
app.use(express.json());

app.use("/api/products",productRouter)

app.get("/", (req, res) => {
  res.send("WELCOME");
});

app.listen(port, () => {
  console.log(`SERVER RUNNING PORT  ${port}`);
});
