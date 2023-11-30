const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = express.Router();
const routes = require("./Routes")
const { MainFun, RegisterUser, DeleteUser } = require("./UserController");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Connect our local database
mongoose
  .connect("mongodb://127.0.0.1:27017/TestUser")
  .then(async () => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(`Error occured. ${err}`);
  });

// Routes
app.post("/register", RegisterUser)
app.delete("/user/:id", DeleteUser)
app.get("/", MainFun)

// Listen at 3000 local port
app.listen(5000, function () {
  console.log("I am listening on port 3000");
});