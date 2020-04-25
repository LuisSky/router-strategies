const userRoute = require('express').Router();

userRoute.route("/")
  .get(require('./testpage.js'));

userRoute.route("/:name")
  .get(require('./userName.js'));
  
module.exports = userRoute;