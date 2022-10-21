const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connection = require("./Config/Connection");
const BlogController = require("./Controller/Blog.controler");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/blog", BlogController);

app.listen(process.env.PORT, async () => {
  console.log(`listening on port ${process.env.PORT}`);
  try {
    await connection;
    console.log("database connected");
  } catch (error) {
    console.log("error to connecting db");
    console.log(error);
  }
});
