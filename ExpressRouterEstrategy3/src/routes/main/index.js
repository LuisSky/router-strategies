const userRoute = require('express').Router();

userRoute.route("/users")
  .get(require('./userPage.js'));