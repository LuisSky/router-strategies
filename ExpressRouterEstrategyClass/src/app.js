const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const routers = require('./router.js')

app.use(routers)

app.listen(3000)