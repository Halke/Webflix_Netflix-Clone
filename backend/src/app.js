require("dotenv").config();
var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  users = require("./api/userRoutes"),
  mongoose = require("mongoose"),
  port = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://test_user123:abcd1234@cluster0.g2hrs.mongodb.net/Webflix?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("DB Successfully Connected!");
  })
  .catch((err) => {
    console.log("ERROR >>> " + err);
  });

// enable CORS without external module
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", users);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
