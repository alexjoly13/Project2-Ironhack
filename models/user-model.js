const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // document structure & rules defined here
    fullName: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true, match: /^.+@.+\..+$/ },
    encryptedPassword: { type: String, required: true },
    birthDate: { type: Date, required: true },
    // level: {
    //   type: String,
    //   enum: ["Beginner", "Intermediate", "Confirmed", "Expert"]
    // },
    favourites: { type: Array },
    role: {
      type: String,
      required: true,
      enum: ["normal", "admin"],
      default: "normal"
    }
  },
  {
    // additional settings for the Schema lass defined here
    timestamps: true
  }
);

// "User" model ---> "users" collection
const User = mongoose.model("User", userSchema);

module.exports = User;
