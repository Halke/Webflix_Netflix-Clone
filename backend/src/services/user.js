const mongoose = require("mongoose");
const { User } = require("../models/user");

module.exports = {
  checkIfExists: (req, res, next) => {
    let email = req.body.email;
    User.findOne({ email: email })
      // .then() is called if doc with defined email exists in database
      .then((doc) => {
        res.sendStatus(200);
      })
      // .catch() is called if doc with defined email does NOT exists in database
      .catch((err) => {
        console.log(err);
        next();
      });
  },
};
