// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const express = require("express");

// const { User } = require("../models/user");

// const getToken = (req, res, next) => {
//   const token = jwt.sign(
//     {
//       data: {
//         email: req.body.email,
//         password: req.body.password,
//       },
//     },
//     `${process.env.SECRET}`,
//     { expiresIn: "1h" }
//   );

//   return token;
// };

// const decodeToken = (req, res, next) => {
//   let decodedToken = {};
//   jwt.verify(
//     req.header.authorization.split(" ")[1],
//     process.env.SECRET,
//     (err, decoded) => {
//       if (err) {
//         res.sendStatus(404).send(err.message);
//       } else {
//         req.body.email = decoded.email;
//         req.body.password = decoded.password;
//         next();
//       }
//     }
//   );
// };

// module.export = { decodeToken, getToken };
