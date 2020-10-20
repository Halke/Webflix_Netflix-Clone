const express = require("express");
const Route = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
//const { getToken, decodeToken } = require("../services/authentification");

const { User } = require("../models/user");

// parse application/json
Route.use(bodyParser.json());

// parse application/x-www-form-urlencoded
Route.use(bodyParser.urlencoded({ extended: true }));

// MIDDLEWARES

const hashPassword = (req, res, next) => {
  bcrypt.genSalt(13, (err, salt) => {
    if (err) {
      console.log(err);
      res.send("SALT GENERATING ERROR!!!");
    } else {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          console.log(err);
          res.send("HASHING ERROR!!!");
        } else {
          req.body.password = hash;
          req.body.salt = salt;
          next();
        }
      });
    }
  });
};

const doesUserExist = (req, res, next) => {
  let loginEmail = req.body.email;
  let loginPassword = req.body.password;

  User.where({ email: loginEmail }).findOne((err, user) => {
    if (err) {
      console.log("An error occured during the login. Try again!");
      res.sendStatus(500);
    } else {
      if (user === null) {
        console.log(`Account with email ${loginEmail} does NOT exist.`);
        // status 204 = No Content
        res.sendStatus(204);
      } else {
        const loginPasswordHashed = bcrypt.hashSync(loginPassword, user.salt);

        if (user.password === loginPasswordHashed) {
          console.log(user);
          res.json({
            name: user.name,
            email: user.email,
          });
        } else {
          console.log("Incorrect password!");
          res.sendStatus(401);
        }
      }
    }
  });
};

const getWatched = (req, res) => {
  User.where({ email: req.params.email }).findOne((err, user) => {
    if (err) {
      console.log("An error occured during the login. Try again!");
      res.sendStatus(500);
    } else {
      // res.json({
      //   likedMovies: user.likedMovies,
      //   likedSeries: user.likedSeries,
      // });
      res.send(user);
    }
  });
};

// ROUTES

Route.post("/api/signUp", hashPassword, (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    salt: req.body.salt,
    name: req.body.name,
    dateOfBirth: req.body.dateOfBirth,
    watchedMovies: [],
  });

  newUser
    .save()
    .then((doc) => {
      console.log("Successfully created user!");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("ERROR >>> " + err);
      res.sendStatus(200);
    });
});

Route.post("/api/login", doesUserExist);

Route.get("/api/get-watched/:email", getWatched);

module.exports = Route;
