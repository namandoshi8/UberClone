const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/db");
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
