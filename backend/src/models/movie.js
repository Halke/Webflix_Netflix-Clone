const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  dateOfWatching: { type: String, default: new Date() },
  posterPath: String,
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = {
  movieSchema: movieSchema,
  Movie: Movie,
};
