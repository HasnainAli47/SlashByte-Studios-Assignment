const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The user must have a name"],
    minlength: [5, "The name must have at least 5 characters"],
    maxlength: [25, "The name can have 25 characters at most"],
  },
  email: {
    type: String,
    required: [true, "User must have an email address"],
    validate: {
      validator: function (mail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
      },
      message: "Invalid email address",
    },
    unique: [true, "User exist with the same email already"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: [true, "User must have a role"],
  }
})

const User = mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = User;