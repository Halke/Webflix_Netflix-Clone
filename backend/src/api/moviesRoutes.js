const express = require("express"),
  Route = express.Router(),
  bodyParser = require("body-parser");

// parse application/json
Route.use(bodyParser.json());

// parse application/x-www-form-urlencoded
Route.use(bodyParser.urlencoded({ extended: true }));

// Content type: movie OR tv OR person
// Content value: popular, top_rated, latest, upcoming
Route.get("/getAll/:contentType/:contentValue", (req, res) => {
  res.sendStatus(200);
});

Route.get("/getSingleContent/:movieId", (req, res) => {
  res.sendStatus(200);
});

module.exports = Route;
