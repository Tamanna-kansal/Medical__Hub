// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   name: { type: String, required: true },
//   phone: { type: Number },
//   photo: { type: String },
//   role: {
//     type: String,
//     enum: ["patient", "admin"],
//     default: "patient",
//   },
//   gender: { type: String, enum: ["male", "female", "other"] },
//   bloodType: { type: String },
//   appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
// });

// export default mongoose.model("User", UserSchema);


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  role: { type: String, default: "patient" },
  photo: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
