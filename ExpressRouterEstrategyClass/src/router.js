
const express = require('express')
const UserController = require('./controllers/user-controller.js')
const ExpressAdapter = require('./config/express-adapter.js')


const router = express.Router()

const UserRoute = new UserController()
router.post('/users', ExpressAdapter.adapt(UserRoute))

module.exports = router

