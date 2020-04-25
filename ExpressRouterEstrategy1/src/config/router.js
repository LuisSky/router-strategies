const express = require('express');
const router = express.Router();

//routers
const users = require('../routes/users.js');

router.get('/users', users.getUsers);
router.get('/users/:name', users.getUserForName);

module.exports = router;