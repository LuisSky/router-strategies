const express = require('express');
const app = express();


const routers = require('./config/router.js');

app.use(routers);

app.listen(3000);