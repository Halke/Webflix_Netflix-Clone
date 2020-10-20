const mongoose = require("mongoose");
const { Schema } = mongoose;

const { movieSchema } = require("./movie");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  name: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  likedSeries: [{ type: Number }],
  likedMovies: [{ type: Number }],
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
