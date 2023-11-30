const express = require("express")
const User = require("./UserModel");


MainFun = async (req, res) => {
    try {
        const users = await User.find(); 
        res.send(users);
    } catch (err) {
        res.status(500).send("There is some error in fetching data. Error is: " + err.message); 
    }
}

RegisterUser = async (req, res) => {
    try {
      let user = new User();
      user.name = req.body.name
      user.email = req.body.email
      user.role = req.body.role
      res.send(await user.save());
    } catch (err) {
    //   console.log(err.message);
      res.send(err.message);
    }
  };

DeleteUser = async (req, res) => {
    try {
      let user = await User.findByIdAndDelete(req.params.id);
      if(!user){
          return res.send("User not found");
      }
      res.send("User Deleted Successfully");
    } catch (err) {
      res.send(err.message);
    }
  }

module.exports = {MainFun, RegisterUser, DeleteUser}

