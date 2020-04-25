const express = require('express');
const router = express.Router();

router.use('/users', require('../routes/users'));
router.use('/products', require('../routes/products'));


module.exports = router;