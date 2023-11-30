const express = require("express");
const Router = express.Router();
const app = express();
const { MainFun, RegisterUser } = require("./UserController");



app.get("/register", async (req, res) => {
    // try {
    //   let user = new User();
    //   user.name = req.body.name;
    //   user.email = req.body.email;
      res.send("Good");
    })

Router.get("/", (req, res) => res.send("Hi2"))

module.exports = Router;