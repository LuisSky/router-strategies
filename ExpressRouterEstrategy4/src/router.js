const express = require('express');
const routes = express.Router();
const UserRoute = require('./routes/users');


routes.get("/users", new UserRoute().getUsers);

module.exports = routes;
