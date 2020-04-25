const prodMain = require('express').Router();

prodMain.route('/')
  .get(require('./getProducts.js'));

module.exports = prodMain; 